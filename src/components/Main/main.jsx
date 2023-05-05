import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import firebase from 'firebase/compat/app'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import BuddyInput from '../BuddyInput/BuddyInput'
import Button from '../Button/button'
import Loader from '../Loader/Loader'
import './Main.css'
import BuddyPopup from '../BuddyPopup/BuddyPopup';

const Main = () => {

	const { auth, firestore } = useContext(Context)
	const [user] = useAuthState(auth);
	const [value, setValue] = useState("");

	const [buddyName, setBuddyName] = useState("");
	const [buddySurname, setBuddySurname] = useState("")
	const [buddyFathername, setBuddyFathername] = useState("")

	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createdAt')
	)

	if (loading) {
		return <Loader />
	}

	const sendMessage = async () => {
		console.log(value);
		firestore.collection('messages').add({
			uid: user.uid,
			displayName: user.displayName,
			photoURL: user.photoURL,
			text: value,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		})

		setValue('')
	}

	const setBuddy = async () => {

		if (buddyName.length || buddySurname.length || buddyFathername.length) {

			firestore.collection("buddies").add({
				name: buddyName,
				surname: buddySurname,
				fathername: buddyFathername,
			})
		}

		setBuddyName("")
		setBuddySurname("")
		setBuddyFathername("")
	}

	return (
		<div className='main'>
			{/* <Addbuddy value={value} onChange={e => setValue(e.target.value)} placeholder={"Имя"} /> */}

			<BuddyPopup>
				<BuddyInput value={buddyName} onChange={e => setBuddyName(e.target.value)} placeholder={"Имя"} />
				<BuddyInput value={buddySurname} onChange={e => setBuddySurname(e.target.value)} placeholder={"Фамилия"} />
				<BuddyInput value={buddyFathername} onChange={e => setBuddyFathername(e.target.value)} placeholder={"Отчество"} />
				<Button onButtonClick={setBuddy} name={"Отправить"} />
			</BuddyPopup>
		</div>
	)
}

export default Main