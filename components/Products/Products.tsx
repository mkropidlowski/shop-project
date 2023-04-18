import { productMockup } from 'db/products';
import ProductCard from './ProductCard/ProductCard';
import styles from './products.module.scss';

const Products = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<h1>Popular Products</h1>
			</div>

			<div className={styles.products}>
				{productMockup.map(({ id, productHeading, productImage, price }) => (
					// TODO: fix productImage
					<ProductCard id={id} key={id} productHeading={productHeading} productImage={productImage} price={price} />
				))}
			</div>
		</div>
	);
};

export default Products;

