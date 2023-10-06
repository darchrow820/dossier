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
import BuddyPage from '../BuddyPage/buddyPage';

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

	// const [buddies] = useCollectionData(
	// 	firestore.collectionGroup('users')
	// )
	const [buddies] = useCollectionData(
		firestore.collection('users').doc(user.uid).collection('buddies')
	)

	console.log(messages);
	console.log(buddies);



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
					console.log(doc);
				});
			} else {
				usersRef.set({
					id: user.uid,
					name: user.displayName
				})
			}
		});

	console.log("usersRef: " + user.uid);


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
		setBuddyName("")
		setBuddySurname("")
		setBuddyFathername("")
		setBuddyPhone("")
	}

	return (
		<div className='main'>
			{/* <Addbuddy value={value} onChange={e => setValue(e.target.value)} placeholder={"Имя"} /> */}

			<BuddyPage buddies={buddies} />

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