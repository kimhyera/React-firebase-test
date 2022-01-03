import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import Board from './pages/board/board';
import Login from './pages/membership/login';
import NewsPage from 'pages/news/News';
import ShopList from 'pages/shop/shopList';
import Crud from 'pages/shop/crud';
import GoodsList from 'pages/goods/goods';

export default function App({ store, authService }) {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header authService={authService} />
        <Switch>
          <Route path={['/', '/main']} exact>
            <div className="contents">
              <Main />
            </div>
          </Route>
          <Route path="/goods">
            <div className="contents">
              <GoodsList />
            </div>
          </Route>
          {/*<Route path="/shop">
            <div className="contents">
              <ShopList />
            </div>
          </Route>*/}
          <Route path="/crud">
            <div className="contents">
              <Crud />
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
