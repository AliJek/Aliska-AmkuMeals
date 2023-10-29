import { NavLink } from 'react-router-dom';
import classes from './MealNavigation.module.css';
import ShopCartButton from './ShopCartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MealNavigation = () => {
	const [mobileNavToggle, setMobileNavToggle] = useState(false);

	const openMobileMenuHandler = () => {
		setMobileNavToggle((prevState) => !prevState);
	};

	const closeHamburgerNav = () => {
		setMobileNavToggle(false);
	};

	return (
		<nav className={classes['nav-list']}>
			<div className={classes.logo}>
				<NavLink to='/'>
					<img
						src={'pictures/aliska-logo.png'}
						alt=''
						onClick={() => setMobileNavToggle(false)}
					/>
				</NavLink>
			</div>{' '}
			<div className={classes.list}>
				<ul
					className={
						mobileNavToggle
							? `${classes['nav-mobile']}`
							: `${classes['desktop']}`
					}
				>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							onClick={closeHamburgerNav}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/menu'
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							onClick={closeHamburgerNav}
						>
							Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/blog'
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							onClick={closeHamburgerNav}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/findus'
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							onClick={closeHamburgerNav}
						>
							Find Us
						</NavLink>
					</li>
				</ul>
				<div className={classes.mobile} onClick={openMobileMenuHandler}>
					{mobileNavToggle && (
						<FontAwesomeIcon icon={faXmark} className={classes['bar-icon']} />
					)}
					{mobileNavToggle ? (
						''
					) : (
						<FontAwesomeIcon icon={faBars} className={classes['close-icon']} />
					)}
				</div>
				<NavLink to='/cart'>
					<ShopCartButton />
				</NavLink>
			</div>
		</nav>
	);
};

export default MealNavigation;
