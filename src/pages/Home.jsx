import '../styles/index.css';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div>
      <Navigation />
      <img className="image" src="https://www.hippo.co.za/blog/motor/drivers-licence-renewal-guide/" />
      <p>Driving Experience Made Easier</p>
      <Footer />
    </div>
        <>
            <Navigation/>
            <div className="background-image-container"></div>

            <br/>
            <Footer/>
        </>

export default Home;
