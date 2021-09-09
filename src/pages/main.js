import React from 'react';

import './main.scss';
import Shop from './shop/app';

const Main = () => {
	return (
		<div className="main wrapper">
			<section className="sale_section">
				<Shop />
			</section>
		</div>
	);
};

export default Main;
