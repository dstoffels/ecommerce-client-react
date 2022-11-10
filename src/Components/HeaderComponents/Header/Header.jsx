import React, { useState } from 'react';
import CartBtn from '../CartBtn/CartBtn.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';

import './Header.css';

const Header = ({}) => {
	return (
		<header id='header'>
			<Nav />
			<Logo />
			<CartBtn />
		</header>
	);
};

export default Header;
