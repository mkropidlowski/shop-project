import Navbar from 'components/Navbar/Navbar';
import styles from './productDetails.module.scss';
import { productMockup } from 'db/products';
import Footer from 'components/Footer/Footer';
import Link from 'next/link';
import { AppContext, IProduct } from 'utils/Context';
import { useContext } from 'react';

interface IProductListProps {
	products: IProduct;
	productId: string;
}

const ProductDetails: React.FC<IProductListProps> = ({ productId, products }) => {
	const { addToCart, cart } = useContext(AppContext);
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
								<button
									className={styles.addToCartBtn}
									type="submit"
									onClick={() => {
										addToCart(products);
									}}
								>
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

