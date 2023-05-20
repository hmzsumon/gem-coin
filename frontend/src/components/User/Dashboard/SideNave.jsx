import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../../../features/auth/authApi';

import { FaShareAlt } from 'react-icons/fa';
// import { ImProfile } from 'react-icons/im';
import { MdSecurity } from 'react-icons/md';
import { FcSettings } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';
import { GiMining, GiWallet } from 'react-icons/gi';
import { VscHistory } from 'react-icons/vsc';
import { ListItemIcon } from '@mui/material';
import { RiLuggageDepositLine } from 'react-icons/ri';
import { AiFillShopping } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';

export default function SideNave() {
	const navigate = useNavigate();

	const items = [
		{
			id: 1,
			name: 'Dashboard',
			icon: <AiTwotoneHome />,
			link: () => navigate('/dashboard'),
		},
		{
			id: 11,
			name: 'Wallet',
			icon: <GiWallet />,
			link: () => navigate('/wallets'),
		},
		{
			id: 2,
			name: 'Referral',
			icon: <FaShareAlt />,
			link: () => navigate('/referral'),
		},

		{
			id: 9,
			name: 'Mining',
			icon: <GiMining />,
			link: () => navigate('/mining'),
		},

		// {
		// 	id: 13,
		// 	name: 'Withdraw',
		// 	icon: <GiWallet />,
		// 	link: () => navigate('/dashboard'),
		// },

		{
			id: 10,
			name: 'History',
			icon: <VscHistory />,
			link: () => navigate('/history'),
		},

		{
			id: 33,
			name: 'Cash Back',
			icon: <BsCashCoin />,
			link: () => navigate('/cashback'),
		},

		{
			id: 30,
			name: 'FDR',
			icon: <RiLuggageDepositLine />,
			link: () => navigate('/fdr'),
		},
		{
			id: 31,
			name: 'NFT',
			icon: <AiFillShopping />,
			link: () => navigate('/nft'),
		},
		{
			id: 5,
			name: 'Settings',
			icon: <FcSettings />,
			link: () => navigate('/settings'),
		},
		// {
		// 	id: 7,
		// 	name: 'Verification',
		// 	icon: <MdOutlineDomainVerification />,
		// 	link: () => navigate('/dashboard'),
		// },
	];

	const [logout, { isSuccess }] = useLogoutMutation();
	const { user } = useSelector((state) => state.auth);
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200,
				backgroundColor: '#0F141D',
			}}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div className='px-6 py-5'>
				<h1 className='text-sm font-semibold text-gray-100'>{user?.name}</h1>
				<h1 className='text-xs font-semibold text-gray-100'>{user?.email}</h1>
				{user.active_status ? (
					<h1 className='text-xs font-semibold text-green-500'>Active</h1>
				) : (
					<h1 className='text-xs font-semibold text-red-500'>Not Active</h1>
				)}
			</div>
			<Divider />
			<List>
				{items.map((item, index) => (
					<ListItem
						sx={{ color: '#fff' }}
						key={item}
						disablePadding
						onClick={item.link}
					>
						<ListItemButton>
							<ListItemIcon className='text-red-500 '>
								<span className='text-white '>{item.icon}</span>
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />

			<div className='px-6 py-5'>
				<Button variant='contained' color='secondary' onClick={() => logout()}>
					Logout
				</Button>
			</div>
		</Box>
	);

	React.useEffect(() => {
		if (isSuccess) {
			window.location.href = '/';
		}
	}, [isSuccess]);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>
						<MenuIcon fontSize='medium' sx={{ color: 'white' }} />
					</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
