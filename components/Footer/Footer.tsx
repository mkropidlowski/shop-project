import { FC } from 'react';
import styles from './footer.module.scss';
import { footerMockup, newsletterMock } from './helpers/data';
import Link from 'next/link';

const Footer: FC = () => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.logo}>
				<h1>SHOP TRENDS</h1>
				<h3>If you have any questions please let us know!</h3>
			</div>
			<div className={styles.container}>
				<div className={styles.links}>
					{Object.values(footerMockup).map(({ heading, links }) => (
						<div className={styles.box} key={heading}>
							<h3>{heading}</h3>
							<ul className={styles.list}>
								{links.map(({ href, text }) => (
									<Link href={href} key={href}>
										<li className={styles.listText}>{text}</li>
									</Link>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className={styles.newsletterBox}>
					<h3>{newsletterMock?.heading}</h3>
					{newsletterMock?.content}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

