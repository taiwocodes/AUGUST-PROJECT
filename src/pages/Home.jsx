import '../styles/index.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navigation />
      <img className="image" src="https://www.hippo.co.za/blog/motor/drivers-licence-renewal-guide/" alt='' />
      <p>Driving Experience Made Easier</p>
      <Footer />
    </div>
  );
}

export default Home;
