import React, { useRef } from 'react';
import classes from './MealItemForm.module.css';
import { nanoid } from 'nanoid';

const MealForm = (props) => {

	const amountInputRef = useRef()

	const onSubmitHandler = (e) => {
		e.preventDefault()

		const inputAmount = amountInputRef.current.value
		const inputAmountNumber = +inputAmount

		props.onAddToCart(inputAmountNumber)
	}
	
	return (
		<form className={classes.form} onSubmit={onSubmitHandler} key={props.id}>
			<div className={classes.input}>
				<label htmlFor={`amount + ${nanoid}`}>Amount:</label>
				<input ref={amountInputRef}  id={`amount + ${nanoid}`} type='number' min='1' max='6' defaultValue={1}/>
			</div>{' '}
			<button className={classes['form-btn']}>+ Add</button>
		</form>
	);
};

export default MealForm;
