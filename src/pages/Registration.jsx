import React, { useState } from "react";
import { useHistory } from "react-router";


function Registration() {

	const [state, setState] = useState({
		fname: '',
		lname: '',
		phone: '',
		email: '',
		address: '',
		dsn: '',
		cert: '',
		gender: '',
		date: new Date().getUTCDate()
	});
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		history.push('/feedback-accepted');
	}

	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};


	return (
		<>

			<div className="form-action">
				<form className="form-body" onSubmit={handleSubmit}>
					<h1 id="registration-title">ENTER YOUR PERSONAL INFORMATION</h1>

					<div className='content'>

						<div className='input-field'>
							<input
								type='text'
								name='First-name'
								id="fname"
								placeholder='First name'
								// value={state.fname}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								name='last-name'
								placeholder='Last name'
								value={state.lname}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='number'
								name='phone-number'
								placeholder='Phone Number'
								value={state.phone}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='email'
								name='email'
								placeholder='Email'
								value={state.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								placeholder='Home address'
								value={state.address}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								placeholder='Name of driving school attended'
								value={state.dsn}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='numbers'
								name='id-number'
								placeholder='Certificate ID'
								value={state.cert}
								onChange={handleChange}
								required
							/>
						</div>
						<br />

						<div className="gender">
							<label className="labels">Gender:
								<select className="gender-options" onChange={handleChange} value={state.gender} >
									<option value="female">Female</option>
									<option value="male">Male</option>
								</select>
							</label>
						</div>

					</div>

					<div className='action'>
						<button
							type='submit'
							className='reg-btn'
						>
							Register
						</button>
					</div>

				</form>
			</div>

		</>
	);
}

export default Registration;
