import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/forms.css';

const Register = (props) => {
	//initialize email, password and confirm password states
	const [state, setState] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	// const newUser = {
	//     email: email,
	//     password: password,
	// };

	const history = useHistory();

	//to update the values
	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handleSubmitClick = (e) => {
		e.preventDefault();
		if (state.password === state.confirmPassword) {
			alert('you have successfuly registered');
		}
	};

	// localStorage.setItem(email, JSON.stringify(newUser));






	// const loginHandler = ({ email, password }) => {
	// 	// create data to be sent to the api for validation
	// 	let userdata = {
	// 		email: email,
	// 		password: password,
	// 	};

	// 	fetch(
	// 		'https://user-manager-three.vercel.app/api/user/login',
	// 		{
	// 			method: 'POST',
	// 			headers: {
	// 				'content-type': 'application/json',
	// 			},
	// 			body: JSON.stringify(userdata),
	// 		}
	// 	)
	// 		.then(res => res.json())
	// 		.then(result => {
	// 			if (result.error) {
	// 				return alert(result.message);
	// 			}

	// 			context.dispatch({
	// 				type: 'LOGIN',
	// 				payload: result.body,
	// 			});

	// 			// history.push('/shopping-list');
	// 		})
	// 		.catch(err => {
	// 			alert(
	// 				'Unable to complete request. Please try again after some time'
	// 			);
	// 			console.log({ err });
	// 		});
	// };






    
	history.push('/register');

	return (
		<>
			<div class='form-action'>
				<form action=''>
					<h1>Register</h1>
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
						<div class='input-field'>
							<input
								type='password'
								placeholder='confirm your password'
								name='confirm-password'
								id='confirm-password'
								required
								value={state.confirmPassword}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div class='action'>
						
							<button
								type='submit'
								className='reg-btn'
								onClick={handleSubmitClick}
							>
								<a className='reg-link'>register</a>
							</button>
						</div>
						<div className='links'>
							<a className='redirect-link' href='/login'>
								Click here to continue
							</a>

                            {/* <p className='link-divider'>|</p> */}

							<a className='redirect-link account-link' href='/login'>
								Already have an account?
							</a>
						</div>

					
				</form>
			</div>
		</>
	);
};

export default Register;
