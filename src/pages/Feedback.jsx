import React from 'react';
import '../styles/forms.css';


const Feedback = () => {

    return (

        <div class='form-action'>
				<form action=''>

    <h1>
        COMPLAINTS? SUGGESTIONS?
    </h1>

    <h3>
            Let us know how we can help you or do better.
    </h3>


    <div class='content'>
						<div class='input-field'>
							<input
								type='text'
								placeholder='enter your name'
								name='name'
								id='name'
								required
							/>
						</div>
						<div class='input-field'>
							<input
								type='email'
								placeholder='enter your email'
								name='email'
								id='email'
								required
							/>
						</div>
						<div class='input-field'>
							<textarea
								type='text'
								placeholder='details of the complaint/suggestion'
								name='details'
								id='details'
								required
							/>
						</div>
					</div>

                    <div class='action'>
						
                        <button
                            type='submit'
                            className='reg-btn'
                        >
                            SUBMIT
                        </button>
                    </div>

                    <div>
                    <p>
             or <a className='email-link' 
			 href="mailto:driverslicenseapp@gmail.com?subject=Complaint%20/%20Suggestion.">
				 send us an email</a> and we'll be right in touch.
            </p>
                    </div>

  

            </form>
</div>

    )
}
export default Feedback;