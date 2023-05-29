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
	const [buddyPhone, setBuddyPhone] = useState("")

	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createdAt')
	)

	const [activePopup, setActivePopup] = useState("");

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

	const usersRef = firestore.collection('users').doc(user.uid)

	usersRef.get()
		.then((docSnapshot) => {
			if (docSnapshot.exists) {
				usersRef.onSnapshot((doc) => {
					// do stuff with the data
				});
			} else {
				usersRef.set({
					id: user.uid,
					name: user.displayName
				})
			}
		});

	// const createUser = async () => {
	// 	firestore.collection('users').add({
	// 		uid: user.uid,
	// 		displayName: user.displayName,
	// 		createdAt: firebase.firestore.FieldValue.serverTimestamp()
	// 	})
	// }

	// createUser();

	// const setBuddy = async () => {

	// 	if (buddyName.length || buddySurname.length || buddyFathername.length) {

	// 		firestore.collection("buddies").add({
	// 			name: buddyName,
	// 			surname: buddySurname,
	// 			fathername: buddyFathername,
	// 		})
	// 	}

	// 	setBuddyName("")
	// 	setBuddySurname("")
	// 	setBuddyFathername("")
	// }



	const setBuddy = async () => {

		if (buddyName.length || buddySurname.length || buddyFathername.length) {

			usersRef.collection("buddies").add({
				name: buddyName,
				surname: buddySurname,
				fathername: buddyFathername,
				phone: buddyPhone,
			})
		}

		setActivePopup(false);
		// console.log(activePopup);
		setBuddyName("")
		setBuddySurname("")
		setBuddyFathername("")
		setBuddyPhone("")
	}

	return (
		<div className='main'>
			{/* <Addbuddy value={value} onChange={e => setValue(e.target.value)} placeholder={"Имя"} /> */}

			<BuddyPopup activePopup={activePopup}>
				<BuddyInput value={buddyName} onChange={e => setBuddyName(e.target.value)} placeholder={"Имя"} />
				<BuddyInput value={buddySurname} onChange={e => setBuddySurname(e.target.value)} placeholder={"Фамилия"} />
				<BuddyInput value={buddyFathername} onChange={e => setBuddyFathername(e.target.value)} placeholder={"Отчество"} />
				<BuddyInput value={buddyPhone} onChange={e => setBuddyPhone(e.target.value)} placeholder={"Телефон"} />
				<Button onClick={setBuddy} name={"Отправить"} />
			</BuddyPopup>
		</div>
	)
}

export default Main