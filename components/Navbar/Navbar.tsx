import styles from './navbar.module.scss';
import { menu } from './helpers/helpers';
import Link from 'next/link';
import { INavbar } from './helpers/types';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

const Navbar: React.FC<INavbar> = ({ links = menu }) => {
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
						<span className={styles.cartIcon}>
							<AiOutlineShoppingCart />
							<span className={styles.cartCount}>5</span>
						</span>
						<AiOutlineHeart />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

