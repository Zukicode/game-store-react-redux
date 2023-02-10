import React from 'react'

//Style
import './cart-item.scss'

export const CartItem = ({id, title, price}) => {
	return (
		<div className='cart-item'>
			<span>{title}</span>
			<div className='cart-item__price'>
				<span>{price} грн.</span>
			</div>
		</div>
	)
}
