export interface IFooter {
	footerLinks?: IFooterLinks[];
	heading?: string;
	links?: LinksProps[];
}

export interface LinksProps {
	href?: string;
	text?: string;
}

export interface IFooterLinks {
	[key: string]: IFooter;
}

export interface INewsletterProps {
	heading?: string;
	// eslint-disable-next-line no-undef
	content?: JSX.Element;
}

