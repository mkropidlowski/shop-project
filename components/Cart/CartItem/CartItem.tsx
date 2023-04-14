import { MdClose } from 'react-icons/md';
import styles from './cartItem.module.scss';

const CartItem = () => {
	return (
		<div className={styles.cartProducts}>
			<div className={styles.searchResultItem} key={''} onClick={() => {}}>
				<div className={styles.imgContainer}>IMG</div>
				<div className={styles.prodDetails}>
					<span className={styles.name}>ELO</span>
					<MdClose className="close-btn" />
					<div className={styles.quantityButtons}>
						<span>-</span>
						<span>55</span>
						<span>+</span>
					</div>
					<div className={styles.text}>
						<span>555</span>
						<span>x</span>
						<span className={styles.highlight}>
							<span>&#8377;</span>
							6666
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

