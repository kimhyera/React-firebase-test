import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './login.scss';

const Login = ({ authService }) => {
	const history = useHistory();

	const goToMaker = (userId) => {
		history.push({
			pathname: '/main',
			state: {
				id: userId,
			},
		});
	};
	const onLogout = () => {
		authService.logout();
	};

	const onSocialLogin = (event) => {
		authService.state.login = true;

		console.log(authService.state.login);
		authService
			.socialLogin(event.currentTarget.name) //
			.then((data) => goToMaker(data.user.uid));
	};

	//const onSocialClick = async (event) => {
	//	const name = event.currentTarget.name;
	//	let provider;
	//	if (name === 'google') {
	//		provider = new firebaseInstance.auth.GoogleAuthProvider();
	//	} else if (name === 'github') {
	//		provider = new firebaseInstance.auth.GithubAuthProvider();
	//	}
	//	await authService.signInWithPopup(provider);
	//};

	useEffect(() => {
		authService.onAuthChange((user) => {
			user && goToMaker(user.uid);
		});
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;

		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = async (event) => {
		// prevent refresh
		event.preventDefault();
		try {
			//let data;
			await authService.createUserWithEmailAndPassword(email, password);
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<section class="login-wrap">
			<section className="login ">
				<h5 className="mb-3 text-center h3 py-4">Login</h5>

				<h5 className="mb-3 text-center h5 mt-4">SNS 계정</h5>

				<ul className="list">
					<li className="item">
						<button onClick={onSocialLogin} name="Google">
							Google
						</button>
					</li>
					<li className="item">
						<button onClick={onSocialLogin} name="Github">
							Github
						</button>
					</li>
				</ul>

				<h5 className="mb-3 text-center h5 mt-4">일반 계정</h5>

				<form onSubmit={onSubmit} className="join-form">
					<div>
						<input
							className="form-input"
							name="email"
							type="text"
							placeholder="Email"
							required
							value={email}
							onChange={onChange}
						/>
					</div>

					<div className="mt-2">
						<input
							className="form-input"
							name="password"
							type="password"
							placeholder="Password"
							required
							value={password}
							onChange={onChange}
						/>
					</div>

					<div class="text-center">
						<input
							type="submit"
							className="button button-primary mt-2"
							value="회원가입"
						/>
					</div>
					{error}
				</form>
			</section>
			<footer className="footer">
				{onLogout && (
					<button className="button button-praimary ml-3" onClick={onLogout}>
						로그아웃
					</button>
				)}
			</footer>
		</section>
	);
};

export default Login;
