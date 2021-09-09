import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import Board from './pages/board/board';
import Login from './pages/membership/login';
import NewsPage from 'pages/news/News';
import Shop from 'pages/shop/app';

export default function App({ store, authService }) {
	return (
		<div>
			<BrowserRouter>
				<Header authService={authService} />
				<Switch>
					<Route path={['/', '/main']} exact>
						<div className="contents">
							<Main />
						</div>
					</Route>
					<Route path="/shop">
						<div className="contents">
							<Shop />
						</div>
					</Route>
					<Route path="/board">
						<div className="contents">
							<Board />
						</div>
					</Route>

					<Route path="/login">
						<div className="contents">
							<Login authService={authService} />
						</div>
					</Route>

					<Route path="/:category?">
						<div className="contents">
							<NewsPage />
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}
