import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../components/alert';

export default function AdminLogin() {

    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const history = useHistory();

    //to update the values
	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.email === '' || state.password === '') {
            setError('Kindly fill the fields!');
        } 
        else if (state.email !== 'admin@email.com') {
            setError('Invalid email! Please try again!')
        }
        else if (state.password !== '1234') {
            setError('Invalid password! Please try again!')
        }
        else {
            history.push('/admin-portal');
        }
    }

    return (
        <>
			<div class='form-action'>
				<form onSubmit={handleSubmit}>
                    <h1>Admin Login</h1>
                    {error && <Alert error={error} />}
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
							Login
						</button>
					</div>
				</form>
			</div>
		</>
    )
}
