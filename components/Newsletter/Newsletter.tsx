import styles from './newsletter.module.scss';

const Newsletter = () => {
	return (
		<div className={styles.wrapper}>
			<input type="text" className={styles.emailInput} placeholder="Enter your email" />
			<button className={styles.subButton} type="submit" onClick={(e) => console.log(e.target)}>
				Subscribe
			</button>
		</div>
	);
};

export default Newsletter;

