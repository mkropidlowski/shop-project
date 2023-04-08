import Image from 'next/image';
import styles from './productCard.module.scss';
import appleWatch from '../../icons/apple-watch.png';

const ProductCard = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={appleWatch} alt="Apple Watch" width="250" height="250" priority />
			</div>
			<div className={styles.details}>
				<span className={styles.productDescription}>Opis produktu blah blah blah</span>
				<h3>$499</h3>
			</div>
		</div>
	);
};

export default ProductCard;

