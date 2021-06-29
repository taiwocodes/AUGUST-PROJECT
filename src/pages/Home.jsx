import '../styles/home.css';

import Footer from '../components/Footer';
import React from "react";
import Navigation from '../components/Navigation';

function Home() {
  return (
        <>
            <Navigation/>
            <div className="background-image-container"></div>

            <br/>
            <Footer/>
        </>
  );
}

export default Home;
//import React from 'react';

//const Home = () => {
    //return(
        //<div>this is the home page</div>
   // )
//}

//export default Home;