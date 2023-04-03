import { LOGIN_ROUTE } from './consts'
import Login from './components/Login/login'

import { MAIN_ROUTE } from './consts'
import Main from './components/Login/login'

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		Component: Login
	}
]

export const privateRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main
	}
]