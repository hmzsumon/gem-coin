import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
let data = [5, 20, 25, 15, 2, 10, 20, 3];
let labels = [
	'Mining & Airdrop ',
	'Private Sale & Pre-Sale ',
	'Farm, Staking, Pools ',
	'GEM Burn',
	'Development',
	'Free Gaming',
	'Exchange Listing ',
	'Worldwide Donation ',
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
				'#F16130',
				'#1BA98D',
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
