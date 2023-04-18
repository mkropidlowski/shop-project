import ProductDetails from 'components/ProductDetails/ProductDetails';
import { productMockup } from 'db/products';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	// return <ProductDetails productId={slug} products={productMockup} />;
};

export default ProductDetailsPage;

