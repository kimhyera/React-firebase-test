import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

//전역 모듈
import rootReducer from 'modules';
import ShopList from './shopList';
import Shopview from './shopView';

const ShopPage = () => {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Switch>
					<Route path={['/shop', '/shop']} exact>
						<div className="contents">
							<ShopList />
						</div>
					</Route>
					<Route path="/shop/view">
						<div className="contents">
							<Shopview />
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default ShopPage;
