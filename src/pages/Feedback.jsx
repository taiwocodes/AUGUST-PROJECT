import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/forms.css';

const Feedback = () => {

	const [state, setState] = useState({
        name: '',
        email: '',
		details: ''
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

        <div className='form-action'>
			<form action='' onSubmit={handleSubmit}>

			<h1>Contact Us</h1>
    		<h3>Let us know how we can help you or do better.</h3>

		<div className='content'>
			<div className='input-field'>
				<input
					type='text'
					placeholder='enter your name'
					name='name'
					id='name'
					required
					value={state.name}
					onChange={handleChange}
				/>
			</div>
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
				<textarea
					type='text'
					placeholder='type your message here'
					name='details'
					id='details'
					required
					value={state.details}
					onChange={handleChange}
				/>
			</div>
		</div>

			<div className='action'>						
				<button
					type='submit'
					className='reg-btn'
				>
				SUBMIT
				</button>
			</div>

			<div>
				<p>or <a className='email-link' 
						href="mailto:driverslicenseapp@gmail.com?subject=Complaint%20/%20Suggestion.">
				send us an email</a> and we'll be right in touch.
				</p>
			</div>
		</form>
	</div>
	)
}
export default Feedback;