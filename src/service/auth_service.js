import React, { Component } from 'react';
import firebase from 'firebase';

import firebaseApp from './firebase';

class AuthService extends Component {
	state = {
		login: false,
	};

	//loginStatus(status) {
	//	const loginOn = useRef(false);
	//	return (loginOn = useRef(status));
	//}
	//providerName= 로그인 제공 업체
	//https://firebase.google.com/docs/auth/web/google-signin

	socialLogin(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

		return firebaseApp.auth().signInWithPopup(authProvider);

		this.setState({ login: true });
	}
	//일반로그인
	login() {}

	//join() {
	//	const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
	//	return firebaseApp.auth().signInWithPopup(authProvider);
	//}

	logout() {
		firebase.auth().signOut();
		this.setState({ login: false });

		console.log(this.state.login);
	}

	onAuthChange(onUserChanged) {
		firebase.auth().onAuthStateChanged((user) => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
