import React, { useContext } from 'react'
import Button from '../Button/button'
import { Context } from '../../index'
import firebase from 'firebase/compat/app'
import s from './Login.module.scss'

const Login = () => {
	const { auth } = useContext(Context);

	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		const { user } = await auth.signInWithPopup(provider);
	}


	return (
		<div className={s.login__wrap}>
			<Button name={"Войти с помощью Google"} className={s.login__button} onButtonClick={login}></Button>
		</div>
	)
}

export default Login