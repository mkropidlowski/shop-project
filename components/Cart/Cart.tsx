import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import styles from './cart.module.scss';
import CartItem from './CartItem/CartItem';

const Cart = ({ setShowCart }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.backgroundLayout}></div>
			<div className={styles.cart}>
				<div className={styles.header}>
					<span className={styles.headingText}>Shopping Cart</span>
					<span className={styles.closeBtn} onClick={() => setShowCart(false)}>
						<MdClose />
						<span className={styles.text}>Close</span>
					</span>
				</div>
				{/* <div className={styles.emptyCart}>
					<BsCartX />
					<span>Cart is empty, continue shopping.</span>
					<button className={styles.returnToShop}>Return to shop</button>
				</div> */}
				<CartItem />
				<div className={styles.cartFooter}>
					<div className={styles.checkout}>
						<span className={styles.text}>Subtotal:</span>
						<span className={styles.text}>$222</span>
					</div>
					<div className={styles.button}>
						<button className={styles.checkoutBtn}>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

