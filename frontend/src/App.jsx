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
import PriceList from './components/Admin/Price/PriceList';
import CreatePrice from './components/Admin/Price/CreatePrice';
import BuyHistory from './components/User/Wallet01/BuyHistory';
import DepositList from './components/Admin/Deposit/DepositList';

import EditDeposit from './components/Admin/Deposit/EditDeposit';
import Investment from './components/User/Mining/Investment';
import History from './components/User/Dashboard/History';
import AllHistory from './components/User/History/AllHistory';
import ComingSone from './global/ComingSone';
import ComingPage from './pages/ComingPage';
import EmailVerification from './components/User/Verification/EmailVerification';
import ForgotPassword from './components/User/ResetPass/ForgotPassword';
import PasswordReset from './components/User/ResetPass/PasswordReset';
import CreateWithdraw from './components/User/Withdraw/CreateWithdraw';
import WhitePaper from './pages/WhitePaper';
import Fdr from './components/User/FDR/Fdr';
import Nft from './components/User/NFT/Nft';
import CashBack from './components/User/CashBack/CashBack';
import Settings from './components/User/Settings/Settings';
import Exchange from './pages/Exchange';
import Contact from './pages/Contact';
import OfferAndEarn from './pages/OfferAndEarn';
import Profile from './components/User/Profile/Profile';
import Security from './components/User/Security/Security';
import WithdrawList from './components/User/Withdraw/WithdrawList';
import Users from './components/Admin/Users/Users';
import EditUser from './components/Admin/Users/EditUser';
import Withdraws from './components/Admin/Withdraw/Withdraws';
import EditWithdraw from './components/Admin/Withdraw/EditWithdraw';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/features' element={<FeaturePage />} />
				<Route path='/roadmap' element={<RoadmapPage />} />
				<Route path='/token' element={<TokennomicsPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/coming' element={<ComingPage />} />
				<Route path='/white-paper' element={<WhitePaper />} />
				<Route path='/exchange' element={<Exchange />} />
				<Route path='/contact-us' element={<Contact />} />
				<Route path='/offer-and-earn' element={<OfferAndEarn />} />

				<Route path='/email-verify' element={<EmailVerification />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route path='/password/reset/:token' element={<PasswordReset />} />

				<Route element={<PrivetRoute isAdmin={true} />}>
					<Route path='/admin/dashboard' element={<AdminDashboard />} />
					<Route path='/admin/prices' element={<PriceList />} />
					<Route path='/create-price' element={<CreatePrice />} />

					<Route path='/admin/deposits' element={<DepositList />} />
					<Route path='/admin/deposit/edit/:id' element={<EditDeposit />} />

					<Route path='/admin/users' element={<Users />} />
					<Route path='/admin/user/edit/:id' element={<EditUser />} />

					<Route path='/admin/withdraw' element={<Withdraws />} />
					<Route path='/admin/withdraw/edit/:id' element={<EditWithdraw />} />
				</Route>

				{/* User Route */}
				<Route element={<PrivetRoute />}>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/wallets' element={<Wallets />} />
					{/* <Route path='/wallets' element={<Wallets />} /> */}
					<Route path='/referral' element={<Referral />} />
					<Route path='/buy-gem' element={<BuyGem />} />
					<Route path='/send' element={<SendGem />} />
					<Route path='/receive' element={<Receive />} />

					<Route path='/mining' element={<Mining />} />
					<Route path='/mining/investment' element={<Investment />} />

					<Route path='/buy-history' element={<BuyHistory />} />
					<Route path='/history' element={<History />} />
					<Route path='/all-history' element={<AllHistory />} />
					<Route path='/coming-sone' element={<ComingSone />} />
					<Route path='/create-withdraw' element={<CreateWithdraw />} />
					<Route path='/fdr' element={<Fdr />} />
					<Route path='/nft' element={<Nft />} />
					<Route path='/cashback' element={<CashBack />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/security' element={<Security />} />
					<Route path='/withdraws' element={<WithdrawList />} />
				</Route>

				<Route path='*' element={<NotFound />}></Route>
			</Routes>
			<ToastContainer />
		</>
	);
};

export default App;
