import React from "react";


function Registration() {

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
            <br/>

            <div className="gender">
              <label className="labels">Gender:
                <select className="gender-options" >
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
