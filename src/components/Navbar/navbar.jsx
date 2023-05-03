import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Button from '../Button/button'
import { LOGIN_ROUTE } from '../../consts'

const navbar = () => {
	const user = true;
	return (
		<div className={s.navbar}>
			<div className={s.navbar__login}>
				{user ?
					<Button name={"Выйти"} className={s.navbar__button}></Button>
					: <NavLink to={LOGIN_ROUTE}><Button name={"Логин"} className={s.navbar__button}></Button></NavLink>
				}
			</div>
		</div>
	)
}

export default navbar