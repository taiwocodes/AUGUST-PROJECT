import React from "react";
import '../styles/forms.css'

function Registration() {
	// const [value, onChange] = useState(new Date());

	return (
		<>

			<div className="form-action">
				<form className="form-body" onSubmit="">
					<h1 id="registration-title">ENTER YOUR PERSONAL INFORMATION</h1>

					<div className='content'>

						<div className='input-field'>
							<input
								type='text'
								name='First-name'
								placeholder='First name'
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								name='last-name'
								placeholder='Last name'
								required
							/>
						</div>


						<div className='input-field'>
							<input
								type='text'
								placeholder='Home address'
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								placeholder='Name of driving school attended'
								required
							/>
						</div>

						<div className='input-field'>
							<input
								type='text'
								placeholder='Address of driving school attended'
								required
							/>
						</div>


						<div className='input-field'>
							<input
								type='numbers'
								name='id-number'
								placeholder='Certificate ID number'
								required
							/>
						</div>


						<div className="gender">
							<label className="labels">Gender: 
								<select className="gender-options">
									<option value="female">Female</option>
									<option value="male">Male</option>
								</select>
							</label>
						</div>
						<br/>
						<div className="gender">
							<label className="labels">License Type: 
								<select className="gender-options">
									<option value="motorcycle">Motorcycle</option>
									<option value="car">Car</option>
									<option value="Bus">Bus</option>
									<option value="Truck">Truck</option>
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
