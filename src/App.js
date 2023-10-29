import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/pages/RootLayour';
import MenuPage from './components/pages/Menu';
import BlogPage from './components/pages/BlogPage';
import FindUs from './components/pages/FindUs';
import CartPage from './components/pages/Cart';
import CartProvider from './store/CartProvider';
import HomePage from './components/pages/Home';
import classes from './App.module.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'menu',
				element: <MenuPage />,
			},
			{
				path: 'blog',
				element: <BlogPage />,
			},
			{
				path: 'findus',
				element: <FindUs />,
			},
			{
				path: 'cart',
				element: <CartPage />,
			},
		],
	},
]);

function App() {
	return (
		<CartProvider>
			<main className={classes.main}>
				<div className={classes.shadow}>
					<RouterProvider router={router} />
				</div>
			</main>
		</CartProvider>
	);
}

export default App;
