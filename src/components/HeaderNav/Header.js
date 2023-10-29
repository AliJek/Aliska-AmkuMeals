import classes from './Header.module.css';
import MealNavigation from './MealNavigation';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<div className={classes.wrapper}>
				<MealNavigation />
			</div>
		</header>
	);
};

export default Header;
