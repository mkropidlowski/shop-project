import styles from './navbar.module.scss';
import { menu } from './helpers/helpers';
import Link from 'next/link';
import { INavbar } from './helpers/types';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import Cart from 'components/Cart/Cart';
import { useContext, useState } from 'react';
import { productMockup } from 'db/products';
import { AppContext } from 'utils/Context';

const Navbar: React.FC<INavbar> = ({ links = menu }) => {
	const [showCart, setShowCart] = useState(false);
	const { cart } = useContext(AppContext);
	console.log('navbar:', cart);

	return (
		<>
			<nav className={styles.wrapper}>
				<div className={styles.menu}>
					<ul className={styles.menuLinks}>
						{Object.values(links).map(({ id, text, redirectToComponent }) => {
							const linkHref = `/#${id}`;
							const hrefToComponent = `/${id}`;
							return (
								<li key={text} className={styles.links}>
									{redirectToComponent ? <Link href={hrefToComponent}>{text}</Link> : <Link href={linkHref}>{text}</Link>}
								</li>
							);
						})}
					</ul>
					<div className={styles.logo}>SHOP TRENDS</div>
					<div className={styles.icons}>
						<BiSearch />
						<span className={styles.cartIcon} onClick={() => setShowCart(true)}>
							<AiOutlineShoppingCart />
							<span className={styles.cartCount}>5</span>
						</span>
						<AiOutlineHeart />
					</div>
				</div>
			</nav>
			{showCart && <Cart setShowCart={setShowCart} product={cart} />}
		</>
	);
};

export default Navbar;

