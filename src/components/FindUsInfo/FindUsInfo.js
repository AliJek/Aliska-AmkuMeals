import Card from '../UI/Card';
import classes from './FindUsInfo.module.css';

const FindUsInfo = () => {
	return (
		<section className={classes.find}>
			<Card>
				<h1 className={classes['find-header']}>How to find Aliska Amku</h1>
				
				<iframe title='sdd'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22094.055088523695!2d18.59662973936922!3d54.403769308606925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd75907cf29c17%3A0x22ec58915629e7ab!2sOlivia%20Star!5e0!3m2!1spl!2spl!4v1677013390126!5m2!1spl!2spl'
					className={classes.map}
					style={{border: 0}}
				/>
			</Card>
		</section>
	);
};

export default FindUsInfo;
