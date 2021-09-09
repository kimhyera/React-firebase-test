import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthService from './service/auth_service';
//스토어 생성
import { createStore } from 'redux';
//provider
import { Provider } from 'react-redux';
//전역 모듈
import rootReducer from 'modules';
//전역 css
import './assets/scss/reset.scss';
import './assets/scss/common.scss';

const store = createStore(rootReducer);
console.log(store.getState()); // 스토어의 상태를 확인

const authService = new AuthService();

ReactDOM.render(
	<Provider store={store}>
		<App authService={authService} />
	</Provider>,
	document.getElementById('root')
);
