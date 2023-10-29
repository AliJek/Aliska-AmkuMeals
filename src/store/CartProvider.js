import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const CartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		let updatedItems;
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const findItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		if (findItemIndex === -1) {
			updatedItems = state.items.concat(action.item);
		} else {
			updatedItems = [...state.items];
			updatedItems[findItemIndex].amount += action.item.amount;
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE_ITEM') {
		let updatedItems;
		const findItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);

		const updatedTotalAmount =
			state.totalAmount - state.items[findItemIndex].price;

		if (state.items[findItemIndex].amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			updatedItems = [...state.items];
			updatedItems[findItemIndex].amount -= 1;
		}

		return {
			items: updatedItems,
			totalAmount: +updatedTotalAmount.toFixed(2),
		};
	}

	if (action.type === 'DELETE') {
        const findItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const deleteItem = state.items.filter((item) => item.id !== action.id);
        const updatedTotalAmount = state.totalAmount - state.items[findItemIndex].price * state.items[findItemIndex].amount
			
		return {
			items: deleteItem,
			totalAmount: +updatedTotalAmount.toFixed(2)
		};
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		CartReducer,
		defaultCartState
	);

	const addItemToCart = (item) => {
		dispatchCartAction({ type: 'ADD_ITEM', item: item });
	};

	const removeItemFromCart = (id) => {
		dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
	};

	const deleteItemFromCart = (id) => {
		dispatchCartAction({ type: 'DELETE', id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
		deleteItem: deleteItemFromCart,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
