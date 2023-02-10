import React from 'react';

//Component
import {GameCover} from './../game-cover'

//Icons
import {AiOutlineCloseCircle} from 'react-icons/ai';

//React-Redux
import { useDispatch } from 'react-redux';

//Style
import './order-item.scss';
import { deleteItemFromCart } from '../../redux/cart/reducer';

export const OrderItem = ({ game }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(deleteItemFromCart(game.id));
	}

	return (
		<div className='order-item'>
			<div className='order-item__cover'>
				<GameCover image={game.image} />
			</div>
			<div className='order-item__title'>
				<span>{game.title}</span>
			</div>
			<div className='order-item__price'>
				<span>{game.price} грн.</span>
				<AiOutlineCloseCircle
					onClick={handleClick}
					className='order-item__delete-icon'
				/>
			</div>
		</div>
	);
};
