import { IMenuLinks } from './types';

export const menu: IMenuLinks = {
	home: {
		id: '',
		text: 'Home',
	},
	products: {
		id: 'products',
		text: 'Products',
		redirectToComponent: true,
	},
	about: {
		id: '/about',
		text: 'About',
	},
	contact: {
		id: '/contact',
		text: 'Contact',
	},
};

