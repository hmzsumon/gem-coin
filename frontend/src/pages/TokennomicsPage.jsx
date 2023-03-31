import React from 'react';
import TemplateLayout from '../layouts/TemplateLayout';
import Tokennomics from '../components/Home/Tokennomics';
import Token from '../components/Home/Token';

const TokennomicsPage = () => {
	return (
		<TemplateLayout>
			<div>
				<Token />
			</div>
		</TemplateLayout>
	);
};

export default TokennomicsPage;
