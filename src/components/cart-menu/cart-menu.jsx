import React from 'react';

//Component
import { Button } from '../button';
import { CartItem } from '../cart-item';

//Utils
import { calcTotalPrice } from '../utils';

//Style
import './cart-menu.scss';

export const CartMenu = ({ items, onClick }) => {
	return (
		<div className='cart-menu'>
			<div className='cart-menu__games-list'>
				{items.length > 0
					? items.map(game => (
							<CartItem
								key={game.title}
								price={game.price}
								title={game.title}
								id={game.id}
							/>
					  ))
					: 'Корзина порожня!'}
			</div>
			{items.length > 0 ? (
				<div className='cart-menu__arrange'>
					<div className='cart-menu__total-price'>
						<span>Підсумком:</span>
						<span>{calcTotalPrice(items)} грн.</span>
					</div>
					<Button type='primary' size='m' onClick={onClick}>Оформити заказ</Button>
				</div>
			) : null}
		</div>
	);
};
