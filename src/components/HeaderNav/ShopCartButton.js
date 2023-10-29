import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from './ShopCartButton.module.css';
import CartContext from '../../store/cart-context';

const ShopCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	const badgeTotalAmount = cartCtx.items.reduce((currentNum, item) => {
		return currentNum + item.amount;
	}, 0);

	return (
		<button className={classes.cart} onClick={props.onClick}>
			<FontAwesomeIcon icon={faCartShopping} className={classes.icon} />
			<span className={classes.badge}>{badgeTotalAmount}</span>
		</button>
	);
};

export default ShopCartButton;
