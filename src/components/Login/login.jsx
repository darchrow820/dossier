import React, { useContext } from 'react'
import { Context } from '../../index'
import firebase from 'firebase/compat/app'
import Button from '../Button/button'

const Login = () => {
	const { auth } = useContext(Context);

	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider;
		const { user } = await auth.signInWithPopup(provider);
	}

	return (
		// <Button onClick={login}>Войти с помощью Google</Button>
		<div>asd</div>
	)
}

export default Login