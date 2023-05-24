import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Features from '../components/Home/Features';
import Prices from '../components/Home/Prices';
import Tokennomics from '../components/Home/Tokennomics';
import Everything from '../components/Home/Everything';
import Token from '../components/Home/Token';
import Roadmap2 from '../components/Home/Roadmap2';
import CoinsTable from '../components/Home/CoinsTable';
import Roadmap from '../components/Home/Roadmap';
const HomePage = () => {
	return (
		<TemplateLayout>
			<div>
				<Hero />
				<About />
				<Features />
				<Roadmap />
				<CoinsTable />
				<Token />
				<Everything />
			</div>
		</TemplateLayout>
	);
};

export default HomePage;
