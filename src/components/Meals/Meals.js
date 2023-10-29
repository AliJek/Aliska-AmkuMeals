import AvailableMeals from './AvailableMeals';
import classes from './Meals.module.css';

const Meals = (props) => {
	return (
		<section className={classes.meals}>
			{' '}
			<h1 className={classes['meal-header']}>Amku Menu</h1>
			<AvailableMeals />
		</section>
	);
};

export default Meals;
