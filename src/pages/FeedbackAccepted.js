import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/feedback.css';
import thankYouImg from '../images/undraw_super_thank_you_obwk.svg';

export default function FeedbackAccepted() {
    return (
        <div className='feedback-accepted'>
            <img src={thankYouImg}
                alt='thanks'
                width='250px'
            />
            <h1>Thank you for contacting us!</h1>
            <h2>We will get back to you</h2>
            <Link to='/home' className='home-pg-link'>Go back to home page</Link>
        </div>
    )
}
