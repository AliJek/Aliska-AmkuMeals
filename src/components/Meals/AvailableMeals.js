import Card from '../UI/Card';
import MealItem from './MealList/MealItem';
import classes from './AvailableMeals.module.css'

const ALISKA_MEALS = [
	{
		id: '1',
		name: 'Spaghetti Carbonara',
		description: 'Delicious pasta dish with a creamy sauce.',
		price: 12.99,
		img: '/pictures/carbonara.jpg',
	},
	{
		id: '2',
		name: 'Chicken Alfredo',
		description: 'Grilled chicken served with vegetables and rice.',
		price: 14.99,
		img: '/pictures/chicken-salad.jpg',
	},
	{
		id: '3',
		name: 'Vegetable Stir-Fry',
		description: 'Vegetarian stir-fry with tofu and assorted vegetables.',
		price: 10.49,
		img: '/pictures/stir-fry.jpg',
	},
	{
		id: '4',
		name: 'Grilled Salmon',
		description: 'Freshly grilled salmon fillet with a lemon butter sauce.',
		price: 16.99,
		img: '/pictures/grilled-salmon.jpg',
	},
	{
		id: '5',
		name: 'Margherita Pizza',
		description: 'Classic Margherita pizza with tomato, mozzarella, and basil.',
		price: 11.99,
		img: '/pictures/margherita-pizza.jpg',
	},
];

const AvailableMeals = (props) => {
	const mealList = ALISKA_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			img={meal.img}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
