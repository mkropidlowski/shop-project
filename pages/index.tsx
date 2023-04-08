import Hero from 'components/Hero/Hero';
import Navbar from 'components/Navbar/Navbar';
import PageLayout from 'components/PageLayout/PageLayout';
import Products from 'components/Products/Products';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<PageLayout>
				<Navbar />
				<Hero />
				<Products />
			</PageLayout>
		</>
	);
};

export default Home;
