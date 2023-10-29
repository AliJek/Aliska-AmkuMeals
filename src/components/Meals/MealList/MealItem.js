import React, { useContext } from 'react';
import MealForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);

	const addToCartHandler = (inputAmountNumber) => {
		cartCtx.addItem({
			name: props.name,
			id: props.id,
			amount: inputAmountNumber,
			price: props.price,
			img: props.img,
		});
	};

	return (
		<li className={classes.list} key={props.id}>
			<div>
				<img src={props.img} alt='zdjęcie dania' className={classes.img} />
			</div>

			<div className={classes['meal-details']}>
				<h2 className={classes.title}>{props.name}</h2>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{props.price}$</div>
			</div>

			<MealForm id={props.id} onAddToCart={addToCartHandler} />
		</li>
	);
};

export default MealItem;
