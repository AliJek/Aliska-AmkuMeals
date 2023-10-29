import React from 'react';
import classes from './HomeInfo.module.css';

const HomeInfo = () => {
	const date = new Date();
	let year = date.getFullYear();
	return (
		<section className={classes['aliska-home']}>
			<div>
				<div className={classes['aliska-info']}>
					<img src={'pictures/Allisa.png'} alt='' />
					<div className={classes['aliska-msg']}>
						<p>
							Hau! Witam serdecznie w mojej restauracji Aliska Amku-Meals! Życzę
							Państwu wspaniale spędzonego czasu przy pysznym jedzonku.
						</p>
						<p> Paszteciki jako napiwki mile widziane!</p>
					</div>
				</div>
			</div>
			<footer>Aliska rights reserved @{year}</footer>
		</section>
	);
};

export default HomeInfo;
