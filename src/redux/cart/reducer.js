import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	ItemsInCart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemInCart(state, action) {
			state.ItemsInCart.push(action.payload);
		},
		deleteItemFromCart(state, action) {
			state.ItemsInCart = state.ItemsInCart.filter(
				game => game.id !== action.payload
			);
		},
	},
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
