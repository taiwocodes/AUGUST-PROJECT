import React, { useState } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function Registration() {
  const [value, onChange] = useState(new Date());
  return (
<>

   <div className="form-action">
    <form className="form-body" onSubmit="">
      <h1>ENTER YOUR PERSONAL INFORMATION</h1>

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

     <div className='input-field'>
        <label>Name:
          <input 
          type='text'
          placeholder='name'
          required
          /> 
          </label>
      </div>




      <div>
        <label>Gender:
          <select>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          </label>
      </div>

       <div>
        <label>Date:
          <DayPicker
           onChange={onChange}
           value={value}
          />
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