import React from 'react'
import '../styles/About.css'; // Assuming you have a CSS file for styling
import '../styles/Navbar.css';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import { FaTruck, FaLeaf, FaStar, FaHeadset } from "react-icons/fa";
import Blog from '../Components/Blog';
import { useNavigate } from 'react-router-dom';
//import welcomeImage from './assets/welcome1.jpeg';


function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h5>Home / About Us</h5>
          <h1>About Us</h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-image"></div>
        <div className="welcome-text">
          <h2>Welcome to Vegefoods an eCommerce website</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          <button className="shop-now-btn" onClick={() => navigate('/shop')}>Shop now</button>
        </div>
      </section>

      {/* Newsletter Section */}
     <Blog/>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats">
          <div className="stat"><h4>10,000</h4><p>Happy Customers</p></div>
          <div className="stat"><h4>100</h4><p>Branches</p></div>
          <div className="stat"><h4>1,000</h4><p>Partners</p></div>
          <div className="stat"><h4>100</h4><p>Awards</p></div>
        </div>
      </section>
      {/* Team Section */}
      <Testimonials />

      {/* featured products Section */}
      <section className="features-icons">
        <div className="feature">
          <FaTruck size={50} color="#28a745" />
          <h5>FREE SHIPPING</h5>
          <p>ON ORDER OVER $100</p>
        </div>
        <div className="feature">
          <FaLeaf size={50} color="#28a745" />
          <h5>ALWAYS FRESH</h5>
          <p>PRODUCT WELL PACKAGE</p>
        </div>
        <div className="feature">
          <FaStar size={50} color="#28a745" />
          <h5>SUPERIOR QUALITY</h5>
          <p>QUALITY PRODUCTS</p>
        </div>
        <div className="feature">
          <FaHeadset size={50} color="#28a745" />
          <h5>SUPPORT</h5>
          <p>24/7 SUPPORT</p>
        </div>
      </section>
      {/* Footer Section can be added here if needed */}
      <Footer />

    </div>
  )
}

export default About