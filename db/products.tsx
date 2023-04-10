import { EarbudsProd2, EarbudsProd3, HeadphoneProd1, SpeakerProd1, WatchProd1, WatchProd3 } from 'components/icons';
import { IProductMockup } from './types';

export const productMockup: IProductMockup[] = [
	{
		id: '1',
		productHeading: '1_Opis produktu blah blah',
		productImage: <EarbudsProd2 />,
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
		price: 449,
		quantity: 10,
	},
	{
		id: '2',
		productHeading: '2_Opis produktu blah blah',
		productImage: <EarbudsProd3 />,
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
		price: 1449,
		quantity: 10,
	},
	{
		id: '3',
		productHeading: '3_Opis produktu blah blah',
		productImage: <HeadphoneProd1 />,
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
		price: 649,
		quantity: 10,
	},
	{
		id: '4',
		productHeading: '4_Opis produktu blah blah',
		productImage: <SpeakerProd1 />,
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
		price: 949,
		quantity: 10,
	},
	{
		id: '5',
		productHeading: '5_Opis produktu blah blah',
		productImage: <WatchProd1 />,
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
		price: 2349,
		quantity: 10,
	},
	{
		id: '6',
		productHeading: '5_Opis produktu blah blah',
		productImage: <WatchProd3 />,
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
		price: 1349,
		quantity: 10,
	},
];

