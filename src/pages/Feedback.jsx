import React from 'react';
import '../styles/forms.css';


const Feedback = () => {

    return (

        <div class='form-action'>
				<form action=''>

    <h1>
        Complaints? Suggestions?
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
							<input
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
                            <a className='submit-btn' href= ''>submit</a>
                        </button>
                    </div>

                    <div>
                    <p>
             or <a href="mailto:driverslicenseapp@gmail.com?subject=Complaint%20in%20working%20with%20you.">send us an email</a>
              and we'll be right in touch.
            </p>
                    </div>

  

            </form>
</div>

    )
}
export default Feedback;