import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='px-4 md:px-10 '>
				<FooterTop />
				<FooterBottom />
			</div>
		</div>
	);
};

export default Footer;
