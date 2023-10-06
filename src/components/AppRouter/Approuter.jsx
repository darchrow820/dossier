import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index';

import Login from '../Login/login'
import Main from '../Main/main'

const Approuter = () => {
	const { auth } = useContext(Context);
	console.log(auth);

	const [user] = useAuthState(auth);
	console.log(user);
	// const user = false;

	// return user ? (
	// 	<Routes>
	// 		{privateRoutes.map(({ path, Component }) =>
	// 			<Route path={path} element={Component} exact={true} />)}
	// 		<Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
	// 	</Routes>
	// ) : (
	// 	<Routes>
	// 		{publicRoutes.map(({ path, Component }) =>
	// 			<Route path={path} element={Component} exact={true} />)}
	// 		<Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
	// 	</Routes>
	// );
	return user ? (
		<Routes>
			<Route path="/main" element={<Main />} />
			<Route path="*" element={<Main />} />
		</Routes>
	) : (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Login />} />
		</Routes>
	);
}

export default Approuter