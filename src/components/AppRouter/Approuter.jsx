import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../routes';
import { MAIN_ROUTE, LOGIN_ROUTE } from '../../consts';

import login from '../Login/login'

const Approuter = () => {
	const user = false;
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
			{privateRoutes.map(({ path, Component }) =>
				<Route path={path} element={Component} exact={true} />)}
			<Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, Component }) =>
				<Route path={path} element={Component} exact={true} />)}
			<Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
		</Routes>
	);
}

export default Approuter