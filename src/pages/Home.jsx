import '../styles/home.css';

import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="background-image-container"></div>
    <div className="content-wrapper">
        <div className="content-container">
            <h4 className="content-heading">Apply for a new Driver's Licence</h4>
            <br/>
            <ul className="app-requirements">
                <li>Use this option if you're applying for the first time.</li>
            </ul>
            <br/>
            <h4 className="content-heading">Prerequisites</h4>
            <br/>
            <ul className="app-requirements">
                <li>You must be at least 18 years</li>
                <li>You must have taken your driver's test and passed</li>
            </ul>
            <br/>
            <Link className="apply-btn-link" to="/registration" >Click here to apply...</Link>

        </div>

        <div className="content-container">
            <h4 className="content-heading">Renew your driver's licence</h4>
            <br/>
            <p id="content-paragraph">The holder of a valid licence may apply for and obtain a renewal of the licence at any time from 30 days before the expiry date of the licence.</p>

            <Link id="renew-link" className="apply-btn-link" to="/renewal" >Click here to renew...</Link>

        </div>
        <div className="content-container">
            <h4 className="content-heading">Documents required for Application</h4>
            <br/>
            <ul className="app-requirements">
                <li >Means of Identification</li>
                <li >Proof of residence</li>
                <li >Driving School Certificate</li>
                <li >Passport photograph</li>
                <li >Current or Expired driver's licence (where applicable)</li>
            </ul>
            
        </div>
    </div>
    <h1 id="motto"><em>...driving experience made easier</em></h1>
    </>
    );
}
   
export default Home;
