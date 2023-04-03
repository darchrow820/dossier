import React from 'react'
import { Route, Routes, Switch, Navigate } from 'react-router-dom'
import { privateRoutes } from '../../routes';
import { publicRoutes } from '../../routes';
import { MAIN_ROUTE } from '../../consts'
import { LOGIN_ROUTE } from '../../consts'

const Approuter = () => {
	const user = false;
	return user ? (
		<Routes>
			{/* {privateRoutes.map(({ path, Component }) =>
				<Route path={path} element={Component} exact={true} />)} */}
			<Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
		</Routes>
	) : (
		<Routes>
			{/* {publicRoutes.map(({ path, Component }) =>
				<Route path={path} element={Component} exact={true} />)} */}
			<Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
		</Routes>
	);
}

export default Approuter