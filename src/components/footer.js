import React from 'react';
import './footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper">
				<p>&copy; {new Date().getFullYear()} rarara </p>
			</div>
		</footer>
	);
};

export default Footer;
