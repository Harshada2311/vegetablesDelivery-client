import React from 'react'
// import { Link } from 'react-router-dom';
import { FaTruck, FaLeaf, FaStar, FaHeadset } from "react-icons/fa";
import '../styles/Navbar.css';
import '../styles/Home.css';
import ProductsByCity from './ProductsByCity';

function HeroSection() {
  return (
    <div>
        <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>We serve Fresh Vegetables & Fruits</h1>
          <p className="lead">We deliver organic vegetables & fruits</p>
          {/* <Link className="btn btn-success btn-lg" to="/shop">View Details</Link> */}
           <ProductsByCity/> 
          {/* <Link className="btn btn-success btn-lg" to="/shop">Shop Now</Link> */}
        </div>

      </div>
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
    </div>
  )
}

export default HeroSection