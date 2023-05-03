import { LOGIN_ROUTE, MAIN_ROUTE } from './consts'

import Login from './components/Login/login'
import Main from './components/Main/main'

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