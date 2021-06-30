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
		// console.log(e.target, "e.target")
		const { id, value } = e.target;
		console.log(id, 'id')
		console.log(value, 'value')
		setState((prevState) => {
			console.log(prevState, 'prevState')
			return {
				...prevState,
				[id]: value,
			}
		});
	}

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
			<div className='form-action'>
				<form onSubmit={handleSubmit}>
                    <h1>Admin Login</h1>
                    {error && <Alert error={error} />}
					<div className='content'>
						<div className='input-field'>
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
						<div className='input-field'>
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
					<div className='action'>
						<button type='submit'>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
    )
}
