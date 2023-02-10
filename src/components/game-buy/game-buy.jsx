import React from 'react';

//Component
import { Button } from './../button';

//Style
import './game-buy.scss';

//Redux
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';

export const GameBuy = ({ game }) => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.ItemsInCart);
	const isItemInCart = items.some(item => item.id === game.id);

	const handleClick = e => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id));
		} else {
			dispatch(setItemInCart(game));
		}
	};

	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} грн.</span>
			<Button
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInCart ? 'Видалити з корзини' : 'В Корзину'}
			</Button>
		</div>
	);
};
