import Newsletter from 'components/Newsletter/Newsletter';
import { IFooterLinks, INewsletterProps } from './types';

export const footerMockup: IFooterLinks = {
	about: {
		heading: 'About',
		links: [
			{
				href: '/',
				text: 'TEST LINK_1',
			},
			{
				href: '/',
				text: 'TEST LINK_2',
			},
			{
				href: '/',
				text: 'TEST LINK_3',
			},
		],
	},
	product: {
		heading: 'Product',
		links: [
			{
				href: '/',
				text: 'TEST LINK_1',
			},
			{
				href: '/',
				text: 'TEST LINK_2',
			},
		],
	},
};

export const newsletterMock: INewsletterProps = {
	heading: 'Newsletter',
	content: <Newsletter />,
};

