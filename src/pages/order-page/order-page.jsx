import React from 'react';

//React-Redux
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item/order-item';

//Utils
import { calcTotalPrice } from '../../components/utils';

//Style
import './order-page.scss';

export const OrderPage = () => {
	const items = useSelector(state => state.cart.ItemsInCart);

	if (items.length < 1) {
		return <h1>Ваша корзина порожня!</h1>;
	}

	return (
		<div className='order-page'>
			<div className='order-page__left'>
				{items.map(game => (
					<OrderItem game={game} />
				))}
			</div>
			<div className='order-page__right'>
				<div className='order-page__total-price'>
					<span>{items.length} товарів на суму: {calcTotalPrice(items)} грн.</span>
				</div>
			</div>
		</div>
	);
};
