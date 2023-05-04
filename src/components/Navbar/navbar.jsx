import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './Navbar.module.css'
import Button from '../Button/button'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index';

const Navbar = () => {

	const { auth } = useContext(Context)
	const [user] = useAuthState(auth);

	return (
		<div className={s.navbar}>
			<div className={s.navbar__login}>
				{user ?
					<Button name={"Выйти"} className={s.navbar__button} onButtonClick={() => auth.signOut()}></Button>
					:
					<Link to="/login">
						<Button name={"Логин"} className={s.navbar__button}></Button>
					</Link>
				}
				{/* <NavLink to={LOGIN_ROUTE}>
						<Button name={"Логин"} className={s.navbar__button}></Button>
					</NavLink> */}
			</div>
		</div>
	)
}

export default Navbar