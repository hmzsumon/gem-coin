import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import About from '../components/Home/About';

const AboutPage = () => {
	return (
		<TemplateLayout>
			<div>
				<About />
			</div>
		</TemplateLayout>
	);
};

export default AboutPage;
