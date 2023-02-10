import React, { useCallback, useState } from 'react';

//Icons
import { BiCartAlt } from 'react-icons/bi';

//Utils
import { calcTotalPrice } from './../utils';

//Component
import { CartMenu } from '../cart-menu';
import {ItemsInCart} from '../items-in-cart'

//Styles
import './cart-block.scss';

//Redux
import { useSelector } from 'react-redux';

//Router
import { useNavigate } from 'react-router';

export const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false); 
	const items = useSelector(state => state.cart.ItemsInCart);
	const totalPrice = calcTotalPrice(items);
	const navigate = useNavigate();


	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false);
		navigate('/order');
	}, [navigate]);


	return (		
		<div className='cart-block'>
			<ItemsInCart quantity={items.length} />

			<BiCartAlt
				size={25}
				className='cart-block__icon'
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className='cart-block__total-price'>{totalPrice} грн.</span>
			) : null}
			{isCartMenuVisible ? <CartMenu items={items} onClick={handleClick} /> : ''}
		</div>
	);
};
