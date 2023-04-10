import Newsletter from 'components/Newsletter/Newsletter';
import { IFooterLinks, INewsletterProps } from './types';

export const footerMockup: IFooterLinks = {
	about: {
		heading: 'About',
		links: [
			{
				href: '/company',
				text: 'Company',
			},
			{
				href: '/jobs',
				text: 'Jobs',
			},
			{
				href: '/delivery',
				text: 'Delivery',
			},
			{
				href: '/faq',
				text: 'FAQ',
			},
			{
				href: '/payments',
				text: 'Payments',
			},
		],
	},
	product: {
		heading: 'Product',
		links: [
			{
				href: '/shop_list',
				text: 'Visit our shop',
			},
			{
				href: '/new_product',
				text: 'New product',
			},
		],
	},
};

export const newsletterMock: INewsletterProps = {
	heading: 'Newsletter',
	content: <Newsletter />,
};

