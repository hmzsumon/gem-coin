import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Features from '../components/Home/Features';
import Roadmap from '../components/Home/Roadmap';
import Prices from '../components/Home/Prices';
import Tokennomics from '../components/Home/Tokennomics';
import Everything from '../components/Home/Everything';
const HomePage = () => {
	return (
		<TemplateLayout>
			<div>
				<Hero />
				<About />
				<Features />
				<Roadmap />
				<Prices />
				<Tokennomics />
				<Everything />
			</div>
		</TemplateLayout>
	);
};

export default HomePage;
