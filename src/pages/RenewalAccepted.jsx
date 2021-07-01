import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/feedback.css';
import thankYouImg from '../images/undraw_super_thank_you_obwk.svg';

export default function RenewalAccepted() {
    return (
        <div className='feedback-accepted'>
            <img src={thankYouImg}
                alt='thanks'
                width='250px'
            />
            <h1>Renewal Successful!</h1>
            <h2>An email will be sent with the date your license will be ready.</h2>
            <Link to='/home' className='home-pg-link'>Go back to home page</Link>
        </div>
    )
}
