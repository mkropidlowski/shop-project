import ProductDetails from 'components/ProductDetails/ProductDetails';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return <ProductDetails productId={slug} />;
};

export default ProductDetailsPage;
