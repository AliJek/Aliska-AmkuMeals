import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartItem.module.css';

const CartItem = (props) => {
	return (
		    <li className={classes['cart']}>
    			<div className={classes['cart-form']}>
    				<img src={props.img} alt='' className={classes.img} />
    
    				<div className={classes['cart-item']}>
    					<h1 className={classes.title}>{props.name}</h1>
    					<p className={classes.price}>
    						Price: <span className={classes['item-price']}>{props.price}</span>
    					</p>
    					<p className={classes.amount}>
    						Amount: <span className={classes['item-amount']}>{props.amount}</span>
    					</p>
    					<button className={classes['delete-btn']} onClick={props.onDelete}>
    						<FontAwesomeIcon icon={faTrash} className={classes.icon} />
    						Delete
    					</button>
    				</div>
    			</div>
    			<div className={classes['cart-btns']}>
    				<button onClick={props.onAdd}>+</button>
    				<button onClick={props.onRemove}>-</button>
    			</div>
    		</li>
	);
};

export default CartItem;
