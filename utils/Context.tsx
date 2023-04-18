import { productMockup } from 'db/products';
import React, { createContext, useContext, useState } from 'react';

export interface IProduct {
	id: string;
	productHeading: string;
	// eslint-disable-next-line no-undef
	productImage: JSX.Element;
	description: string;
	price: number;
	quantity: number;
}
export interface IContextProps {
	children?: React.ReactNode;
	cart?: IProduct[];
	addToCart?: (product: IProduct) => void;
	removeFromCart?: (productId: string) => void;
}

export const AppContext = createContext<IContextProps>({
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
});

export const useCart = () => {
	return useContext(AppContext);
};

const AppContextProvider: React.FC<IContextProps> = ({ children }) => {
	const [cart, setCart] = useState<IProduct[]>([]);

	console.log('CART CONTEXT: ', cart);

	const addToCart = (product: IProduct) => {
		setCart([...cart, product]);
	};

	const removeFromCart = (productId: string) => {
		setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
	};

	return <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

