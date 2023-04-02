import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturePage from './pages/FeaturePage';
import RoadmapPage from './pages/RoadmapPage';
import TokennomicsPage from './pages/TokennomicsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivetRoute from './route/PrivetRoute';
import Dashboard from './components/User/Dashboard/Dashboard';
import NotFound from './pages/NotFound';
import Wallets from './components/User/Dashboard/Wallets';
import Referral from './components/User/Dashboard/Referral';
import BuyGem from './components/User/Wallet01/BuyGem';
import SendGem from './components/User/Wallet01/SendGem';
import Receive from './components/User/Wallet01/Receive';
import Mining from './components/User/Mining/Mining';

import AdminDashboard from './components/Admin/Dashboard/Dashboard';
import PriceList from './components/User/Dashboard/PriceList';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/features' element={<FeaturePage />} />
				<Route path='/roadmap' element={<RoadmapPage />} />
				<Route path='/token' element={<TokennomicsPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />

				<Route element={<PrivetRoute isAdmin={true} />}>
					<Route path='/admin/dashboard' element={<AdminDashboard />} />
					<Route path='/admin/prices' element={<PriceList />} />
				</Route>

				{/* User Route */}
				<Route element={<PrivetRoute />}>
					<Route path='/dashboard' element={<Wallets />} />
					{/* <Route path='/wallets' element={<Wallets />} /> */}
					<Route path='/referral' element={<Referral />} />
					<Route path='/buy-gem' element={<BuyGem />} />
					<Route path='/send' element={<SendGem />} />
					<Route path='/receive' element={<Receive />} />

					<Route path='/mining' element={<Mining />} />
				</Route>

				<Route path='*' element={<NotFound />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
};

export default App;
