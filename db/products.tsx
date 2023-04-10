import { EarbudsProd2, EarbudsProd3, HeadphoneProd1, SpeakerProd1, WatchProd1, WatchProd3 } from 'components/icons';
import { IProductMockup } from './types';

export const productMockup: IProductMockup[] = [
	{
		id: '1',
		productHeading: 'Rockerz 550 Over Ear Bluetooth Headphone',
		productImage: <EarbudsProd2 />,
		description:
			'boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.',
		price: 449,
		quantity: 10,
	},
	{
		id: '2',
		productHeading: 'boAt Rockerz 518 Wireless Headphone',
		productImage: <EarbudsProd3 />,
		description:
			'Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Dont just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana.',
		price: 1449,
		quantity: 10,
	},
	{
		id: '3',
		productHeading: 'Trebel Rockerz 550 Wireless Bluetooth Headphones',
		productImage: <HeadphoneProd1 />,
		description:
			'Ladies, the time hath come to reach the wall of fame. Make your hustle shine like a diamond with TRebel Rockerz 550 — an audio partner that’s made to suit your vibe. Let your hustle never stop with its 20 hours of powerful playback and never settle for less with the sheer audio power of 50mm Dynamic Drivers. Block the voices that don’t matter with its physical noise isolation. With a 500mAh battery, TRebel Rockerz 550 will be your cheerleader through thick & thin. There’s no point in waiting — match your mood with the best wireless headphones for women.',
		price: 649,
		quantity: 10,
	},
	{
		id: '4',
		productHeading: 'boAt Stone 500 - Portable Bluetooth Speaker',
		productImage: <SpeakerProd1 />,
		description:
			'Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting. Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode. With a Type-C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice. With Stone 500, it is time to #BeTheLimelight.',
		price: 949,
		quantity: 10,
	},
	{
		id: '5',
		productHeading: 'boAt Vertex | Smartwatch with Fitness Trackers, 1.69" HD Display, Sleep Tracking, 100+ Watch Faces',
		productImage: <WatchProd1 />,
		description:
			'When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.',
		price: 2349,
		quantity: 10,
	},
	{
		id: '6',
		productHeading: 'boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display, Multiple Watch Faces',
		productImage: <WatchProd3 />,
		description:
			'Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!',
		price: 1349,
		quantity: 10,
	},
];

