import { useContext } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {

	const cartCtx = useContext(CartContext)
		const totalAmount = cartCtx.totalAmount.toFixed(2)

		const cartItemAddHandler = (item) => {
			cartCtx.addItem({...item, amount: 1})
		}

		const cartItemRemoveHandler = (id) => {
			cartCtx.removeItem(id)
		}

		const deleteItemHandler = id => {
			cartCtx.deleteItem(id)
		}

		const cartItems = (
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						name={item.name}
						price={item.price}
						amount={item.amount}
						img={item.img}
						onAdd={cartItemAddHandler.bind(null, item)}
						onRemove={cartItemRemoveHandler.bind(null, item.id)}
						onDelete={deleteItemHandler.bind(null, item.id)}
					/>
				))}
			</ul>
		);

	return (
		<section className={classes.cart}>
			<div className={classes['cart-padding']}>
				<Card>
					{cartItems}
					<div className={classes.summary}>
						<div className={classes['summary-price']}>
							<h3>Total Amount:</h3>
							<p className={classes['total-price']}>${totalAmount}</p>
						</div>
						<div className={classes.actions}>
							<button>Order</button>
							<button>Close</button>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default Cart;
