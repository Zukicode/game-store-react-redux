import React from 'react'

import './items-in-cart.scss'

export const ItemsInCart = ({quantity}) => {
	return quantity > 0 ? <div className='items-in-cart'>{quantity}</div> : null;
};
