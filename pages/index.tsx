import Hero from 'components/Hero/Hero';
import Navbar from 'components/Navbar/Navbar';
import PageLayout from 'components/PageLayout/PageLayout';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<PageLayout>
				<Navbar />
				<Hero />
			</PageLayout>
		</>
	);
};

export default Home;
