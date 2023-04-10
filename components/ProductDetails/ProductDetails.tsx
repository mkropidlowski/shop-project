import Navbar from 'components/Navbar/Navbar';
import styles from './productDetails.module.scss';
import { productMockup } from 'db/products';
import Footer from 'components/Footer/Footer';
import Link from 'next/link';

const ProductDetails = ({ productId }) => {
	const filteredProduct = productMockup.filter((product) => {
		if (productId === product.id) {
			return product;
		}
	});

	return (
		<>
			<Navbar />
			<div className={styles.wrapper}>
				{filteredProduct.map(({ id, productHeading, productImage, description, price }) => (
					<div className={styles.container} key={id}>
						<div className={styles.imageBox}>{productImage}</div>
						<div className={styles.productDetails}>
							<h2 className={styles.heading}>{productHeading}</h2>
							<p className={styles.description}>{description}</p>
							<h3 className={styles.price}>Buy for: $ {price}</h3>
							<div className={styles.buttonBox}>
								<button className={styles.addToCartBtn} type="submit">
									Add to cart
								</button>
								<Link href="/">
									<button className={styles.backToHome} type="button">
										Back
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default ProductDetails;

