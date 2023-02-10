import React from 'react';

//For router
import { Link } from 'react-router-dom';

//Components
import { CartBlock } from './../cart-block/cart-block';

//Styles
import './header.scss';

export const Header = () => {
	return (
		<div className='header'>
			<div className='wrapper'>
				<Link to='/' className='header__store-title'>
					Game Store
				</Link>
			</div>

			<div className='wrapper header__cart-btn-wrapper'>
				<CartBlock />
			</div>
		</div>
	);
};
