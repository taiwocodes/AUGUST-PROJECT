import React, { useState } from "react";
import { useHistory } from "react-router";


const Registration = () => {
	const initialRegistrationData = Object.freeze({
		fname: "",
		lname: "",
		phonenum: "",
		homeaddress: "",
		driveschool: "",
		idnum: "",
		gender: ""
	})



	const [registrationData, updateRegistrationData] = React.useState(initialRegistrationData);

	const handleChange = (e) => {
		updateRegistrationData({...registrationData,
			//trimming any whitespace
			[e.target.name]: e.target.value.trim()});
	};


    const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(registrationData)
		//...submit to API or something

        history.push('/reg-accepted');

	}


	return (
		<>

			<div className="form-action">
				<form className="form-body" onSubmit={handleSubmit}>
					<h1 id="registration-title">ENTER YOUR PERSONAL INFORMATION</h1>

					<div className='content'>

						<div className='input-field'>
							<input
								type='text'
								name="fname"
								placeholder='First name'
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								name='lname'
								placeholder='Last name'
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='number'
								name='phonenum'
								placeholder='Phone Number'
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='email'
								name='email'
								placeholder='Email'
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								name='homeaddress'
								placeholder='Home address'
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								name='driveschool'
								placeholder='Name of driving school attended'
								onChange={handleChange}
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='numbers'
								name='idnum'
								placeholder='Certificate ID'
								onChange={handleChange}
								required
							/>
						</div>
						<br />

						<div className="gender">
							<label className="labels">Gender:
								<select  id='gender' className="gender-options" onChange={handleChange} >
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
