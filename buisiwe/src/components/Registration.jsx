import React, { useState } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function Registration() {
  const [value, onChange] = useState(new Date());
  return (
   <div className="Registration">
     <form onSubmit="">
      <h1>Fill in Personal Information</h1>
      <div>
        <label>Name:
          <input 
          type='text'
          placeholder='name'
          required
          />
          </label>
      </div>
      <br/>

       <div>
        <label>Surname:
          <input 
          type='text'
          placeholder='surname'
          required
          />
          </label>
      </div>
      <br/>

       <div>
        <label>ID Number:
          <input 
          type='numbers'
          placeholder='id number'
          required
          />
          </label>
      </div>
      <br/>
       <div>
        <label>Name:
          <input 
          type='text'
          placeholder='name'
          required
          />
          </label>
      </div>
      <br/>
       <div>
        <label>Address:
          <textarea 
          type='text'
          placeholder='full address'
          required
          />
          </label>
      </div>
      <br/>
       <div>
        <label>Gender:
          <select>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          </label>
      </div>
      <br/>
       <div>
        <label>Date:
          <DayPicker
           onChange={onChange}
           value={value}
          />
          </label>
      </div>
      <br/>
      <input type='submit' value='Submit' />
     </form>
   </div>
  );
}

export default Registration;
