import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../HeaderNav/Header';

const RootLayout = () => {
	return (
	
			<React.Fragment>
				<Header />
				<Outlet />
			</React.Fragment>
		
	);
};

export default RootLayout;
