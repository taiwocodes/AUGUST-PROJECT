import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
	// initialize email and password states
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

	//to update the values
	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	// const handleSubmitClick = (e) => {
	//     e.preventDefault();
	// }

	history.push('/login');

	return (
		<>
			<div class='form-action'>
				<form action = ''>
					<h1>Login</h1>
					<div class='content'>
						<div class='input-field'>
							<input
								type='email'
								placeholder='enter your email'
								name='email'
								id='email'
								required
								value={state.email}
								onChange={handleChange}
							/>
						</div>
						<div class='input-field'>
							<input
								type='password'
								placeholder='enter your password'
								name='password'
								id='password'
								required
								value={state.password}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div class='action'>
						<button type='submit'>
							<a className='login-link' href='/home'>LOGIN</a>
							</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
