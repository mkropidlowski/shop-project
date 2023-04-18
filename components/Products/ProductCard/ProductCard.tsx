import styles from './productCard.module.scss';
import { useRouter } from 'next/router';
import { IProductProps } from 'db/types';
import { FC } from 'react';

const ProductCard: FC<IProductProps> = ({ id, productHeading, productImage, price }) => {
	const router = useRouter();

	const showDetailsHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		const target = event.currentTarget;
		const id = target.getAttribute('data-id');
		if (id !== undefined && id !== null) {
			router.push(`/product_details/${id}`);
		}
	};

	return (
		<div className={styles.wrapper} data-id={id} onClick={showDetailsHandler}>
			<div className={styles.image}>{productImage}</div>
			<div className={styles.details}>
				<span className={styles.productDescription}>{productHeading}</span>
				<h3>$ {price}</h3>
			</div>
		</div>
	);
};

export default ProductCard;

