export interface INavbar {
	links?: INavbar[];
	id?: string;
	text?: string;
	redirectToComponent?: boolean;
}

export interface IMenuLinks {
	[key: string]: INavbar;
}

