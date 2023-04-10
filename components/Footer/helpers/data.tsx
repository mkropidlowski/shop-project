import Newsletter from 'components/Newsletter/Newsletter';
import { IFooterLinks, INewsletterProps } from './types';

export const footerMockup: IFooterLinks = {
	about: {
		heading: 'About',
		links: [
			{
				href: '/1',
				text: 'TEST LINK_1',
			},
			{
				href: '/2',
				text: 'TEST LINK_2',
			},
			{
				href: '/3',
				text: 'TEST LINK_3',
			},
		],
	},
	product: {
		heading: 'Product',
		links: [
			{
				href: '/5',
				text: 'TEST LINK_1',
			},
			{
				href: '/6',
				text: 'TEST LINK_2',
			},
		],
	},
};

export const newsletterMock: INewsletterProps = {
	heading: 'Newsletter',
	content: <Newsletter />,
};

