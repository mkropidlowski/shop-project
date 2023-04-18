import { MdClose } from 'react-icons/md';
import styles from './cartItem.module.scss';
import { useContext } from 'react';
import { AppContext, IContextProps, IProduct } from 'utils/Context';

interface ICartItemProps {
	product: IProduct;
}

const CartItem: React.FC<ICartItemProps> = ({ product }) => {
	const { removeFromCart } = useContext<IContextProps>(AppContext);
	console.log('CART ITEM: ', product);

	return (
		<>
			<div className={styles.cartProducts}>
				<div className={styles.searchResultItem} key={product.id} onClick={() => {}}>
					<div className={styles.imgContainer}>IMG</div>
					<div className={styles.prodDetails}>
						<span className={styles.name}>{product.productHeading}</span>
						<button onClick={() => removeFromCart(product.id)}>
							<MdClose />
						</button>
						<div className={styles.quantityButtons}>
							<span>-</span>
							<span>55</span>
							<span>+</span>
						</div>
						<div className={styles.text}>
							<span>555</span>
							<span>x</span>
							<span className={styles.highlight}>
								<span>$ </span>
								{product.price}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;

