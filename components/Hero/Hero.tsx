import Image from 'next/image';
import styles from './hero.module.scss';
import iphoneBanner from '../icons/iphone-14.png';

const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.header}>SALES</h1>
					<p className={styles.description}>
						Convallis interdum purus adipiscing dis parturient posuere ac a quam a eleifend montes parturient posuere curae
						tempor
					</p>
					<div className={styles.buttons}>
						<button>Read more</button>
						<button>Shop now!</button>
					</div>
				</div>
				<Image className={styles.bannerLogo} src={iphoneBanner} alt="Iphone 14 PRO" />
			</div>
		</div>
	);
};

export default Hero;

