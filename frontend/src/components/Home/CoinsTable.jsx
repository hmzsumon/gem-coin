import React, { useEffect, useState } from 'react';
import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Typography,
	TextField,
	LinearProgress,
	Pagination,
} from '@mui/material';
import axios from 'axios';
import { CoinList } from '../../config/api';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../../CryptoContext';

import GemLogo from '../../assets/images/logo-blue.png';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { useGetPricesQuery } from '../../features/prices/priceApi';

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CoinsTable = () => {
	const { data, isLoading } = useGetPricesQuery();
	const { currentPrice } = data || {};

	const gemCoins = [
		{
			id: 'gemcoin',
			symbol: 'gmc',
			name: 'GEMCoin',
			usd: currentPrice?.price,
			change24h: 8.63,
			change7d: 2.9,
			current_price: currentPrice?.price,
			price_change_percentage_24h: 8.63,
			market_cap: 543433096809,
			image: GemLogo,
		},
	];
	const [coins, setCoins] = useState([]);
	console.log('coins: ', coins);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	const { currency, symbol } = CryptoState();
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	const fetchCoins = async () => {
		setLoading(true);
		const { data } = await axios.get(CoinList(currency));

		setCoins(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchCoins();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currency]);

	const handleSearch = () => {
		return coins.filter(
			(coin) =>
				coin.name.toLowerCase().includes(search) ||
				coin.symbol.toLowerCase().includes(search)
		);
	};

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container sx={{ mt: 4, textAlign: 'center' }}>
					<Typography variant='h4' component='h1' sx={{ mb: 4 }}>
						Cryptocurrency Prices by Market Cap
					</Typography>

					<TextField
						label='Search For a Crypto Currency..'
						variant='outlined'
						style={{ marginBottom: 20, width: '100%' }}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<TableContainer component={Paper}>
						{loading || isLoading ? (
							<LinearProgress style={{ backgroundColor: 'gold' }} />
						) : (
							<Table sx={{ minWidth: 650 }} aria-label='simple table'>
								<TableHead style={{ backgroundColor: '#EEBC1D' }}>
									<TableRow>
										{['Coin', 'Price', '24h Change', 'Market Cap'].map(
											(head) => (
												<TableCell
													style={{
														color: 'black',
														fontWeight: '700',
														fontFamily: 'Montserrat',
													}}
													key={head}
													align={head === 'Coin' ? '' : 'right'}
												>
													{head}
												</TableCell>
											)
										)}
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										sx={{
											backgroundColor: '#16171a',
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: '#131111',
											},
											fontFamily: 'Montserrat',
										}}
										key={gemCoins[0].id}
									>
										<TableCell
											component='th'
											scope='row'
											style={{
												display: 'flex',
												gap: 15,
											}}
										>
											<img
												src={gemCoins[0].image}
												alt={gemCoins[0].name}
												className='mb-4 w-14'
											/>
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												<span
													style={{
														textTransform: 'uppercase',
														fontSize: 22,
													}}
												>
													{gemCoins[0].symbol}
												</span>
												<span style={{ color: 'darkgrey' }}>
													{gemCoins[0].name}
												</span>
											</div>
										</TableCell>
										<TableCell align='right'>
											{symbol}{' '}
											{numberWithCommas(gemCoins[0].current_price.toFixed(2))}
										</TableCell>
										<TableCell
											align='right'
											style={{
												color: 'rgb(14, 203, 129)',
												fontWeight: 500,
											}}
										>
											+{gemCoins[0].price_change_percentage_24h.toFixed(2)}%
										</TableCell>
										<TableCell align='right'>
											{symbol}{' '}
											{numberWithCommas(
												gemCoins[0].market_cap.toString().slice(0, -6)
											)}
											M
										</TableCell>
									</TableRow>
									{handleSearch()
										.slice((page - 1) * 10, (page - 1) * 10 + 10)
										.map((row) => {
											const profit = row.price_change_percentage_24h > 0;
											return (
												<TableRow
													sx={{
														backgroundColor: '#16171a',
														cursor: 'pointer',
														'&:hover': {
															backgroundColor: '#131111',
														},
														fontFamily: 'Montserrat',
													}}
													key={row.name}
												>
													<TableCell
														component='th'
														scope='row'
														style={{
															display: 'flex',
															gap: 15,
														}}
													>
														<img
															src={row?.image}
															alt={row.name}
															className='mb-4 w-14'
														/>
														<div
															style={{
																display: 'flex',
																flexDirection: 'column',
															}}
														>
															<span
																style={{
																	textTransform: 'uppercase',
																	fontSize: 22,
																}}
															>
																{row.symbol}
															</span>
															<span style={{ color: 'darkgrey' }}>
																{row.name}
															</span>
														</div>
													</TableCell>
													<TableCell align='right'>
														{symbol}{' '}
														{numberWithCommas(row.current_price.toFixed(2))}
													</TableCell>
													<TableCell
														align='right'
														style={{
															color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
															fontWeight: 500,
														}}
													>
														{profit && '+'}
														{row.price_change_percentage_24h.toFixed(2)}%
													</TableCell>
													<TableCell align='right'>
														{symbol}{' '}
														{numberWithCommas(
															row.market_cap.toString().slice(0, -6)
														)}
														M
													</TableCell>
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						)}
					</TableContainer>
					{/* Comes from @material-ui/lab */}
					<Pagination
						count={(handleSearch()?.length / 10).toFixed(0)}
						style={{
							padding: 20,
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
						sx={{
							'& .MuiPaginationItem-root': {
								color: 'gold',
							},
						}}
						onChange={(_, value) => {
							setPage(value);
							window.scroll(0, 450);
						}}
					/>
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default CoinsTable;
