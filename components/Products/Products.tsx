import ProductCard from './ProductCard/ProductCard';
import styles from './products.module.scss';

const Products = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<h1>Popular Products</h1>
			</div>

			<div className={styles.products}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default Products;

