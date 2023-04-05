import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
let data = [65, 5, 7, 4, 9, 10];
let labels = [
	'Firm Capital',
	'ICO Marketing',
	'Exchange Listing',
	'Team',
	'Bounty & Events',
	'Advisors & Partners',
];
let customLabels = labels.map((label, index) => `${label}: ${data[index]} %`);

const chartdata = {
	labels: customLabels,
	datasets: [
		{
			data: data,
			backgroundColor: [
				'#F16130',
				'#1BA98D',
				'#773E8C',
				'#E22C3A',
				'#F99C25',
				'#87bc3a',
			],
			borderColor: ['black'],
			borderWidth: 1,
		},
	],
};

const PieChart = () => {
	return (
		<div>
			<Pie
				data={chartdata}
				options={{
					labels: {
						display: false,
					},
					plugins: {
						legend: {
							display: false,
						},
						datalabels: {
							display: false,
						},
					},
				}}
			/>
		</div>
	);
};

export default PieChart;
