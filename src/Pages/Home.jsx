// pages/Home.jsx
import React from 'react';
//import { Link } from 'react-router-dom';
//import { FaTruck, FaLeaf, FaStar, FaHeadset } from "react-icons/fa";
import '../styles/Home.css';
import '../styles/Navbar.css'; // Assuming Navbar styles are needed here
import '../styles/product.css';
import Footer from '../Components/Footer';
import Shop from '../Components/Shop';
import OurProduct from '../Components/OurProduct';
// import DealOfDay from '../Components/DealOfDay';
// import Testimonials from '../Components/Testimonials';
// import Blog from '../Components/Blog';
import HeroSection from '../Components/HeroSection';


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Shop />
      <OurProduct />
      {/* <DealOfDay /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Footer />





 {/* <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>We serve Fresh Vegetables & Fruits</h1>
          <p className="lead">We deliver organic vegetables & fruits</p>
          <Link className="btn btn-success btn-lg" to="/product">View Details</Link>
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
      </section> */}

      {/* Shop Now Section */}

      {/* <section className="shop-now-section">
        <h2 className="section-title">Vegetables</h2>
        <p>Protect the health of every home</p>
        <div className="shop-now-grid">
          <div className="shop-now-box">
            <img src="../assets/green_veg.jpeg" alt="Vegetables" />
            <button>Shop now</button>
          </div>
          <div className="shop-now-box">
            <img src="../assets/tomato.jpeg" alt="Juices" />
            <button>Shop now</button>
          </div>
          <div className="shop-now-box">
            <img src="../assets/flower.jpeg" alt="Fruits" />
            <button>Shop now</button>
          </div>
        </div>
      </section> */}

      {/* Our Products Section */}
      {/* <section className="product-section">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="products">
          <div className="product-card">
            <div className="discount">30%</div>
            <img src="../assets/bell_pepper.jpeg" alt="Bell Pepper" />
            <h4>BELL PEPPER</h4>
            <div>
              <span className="old-price">$120.00</span>
              <span className="price">$80.00</span>
            </div>
            <div className="hover-icons">
              <i className="bi bi-cart"></i>
              <i className="bi bi-heart"></i>
              <i className="bi bi-eye"></i>
            </div>

          </div>
          <div className="product-card">
            <img src="../assets/strawberry.jpeg" alt="Strawberry" />
            <h4>STRAWBERRY</h4>
            <div className="price">$120.00</div>
            <div className="hover-icons">
              <i className="bi bi-cart"></i>
              <i className="bi bi-heart"></i>
              <i className="bi bi-eye"></i>
            </div>
          </div>
          <div className="product-card">
            <img src="../assets/benas.jpeg" alt="Green Beans" />
            <h4>GREEN BEANS</h4>
            <div className="price">$120.00</div>
            <div className="hover-icons">
              <i className="bi bi-cart"></i>
              <i className="bi bi-heart"></i>
              <i className="bi bi-eye"></i>
            </div>
          </div>
          <div className="product-card">
            <img src="../assets/purple_cabage.jpeg" alt="Purple Cabbage" />
            <h4>PURPLE CABBAGE</h4>
            <div className="price">$120.00</div>
            <div className="hover-icons">
              <i className="bi bi-cart"></i>
              <i className="bi bi-heart"></i>
              <i className="bi bi-eye"></i>
            </div>
          </div>
        </div>
      </section> */}

      {/* Deal of the Day Section */}

      {/* <section className="deal-of-day">
        <div className="deal-content">
          <p className="subheading">Best Price For You</p>
          <h2>Deal of the day</h2>
          <p className="description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <h3 className="product-name">Spinach</h3>
          <p className="price"><span className="old-price">$10</span> <span className="new-price">$5 only</span></p>
          <div className="countdown">
            <div className="time-box"><h4>-2015</h4><span>DAYS</span></div>
            <div className="time-box"><h4>13</h4><span>HOURS</span></div>
            <div className="time-box"><h4>13</h4><span>MINUTES</span></div>
            <div className="time-box"><h4>58</h4><span>SECONDS</span></div>
          </div>
        </div>
      </section> */}

      {/* Testomonials Section*/}

      {/* <section className="testimonials">
        <div className="section-title">
          <p className="subheading">Testimony</p>
          <h2>Our satisfied customer says</h2>
          <p className="description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <img src="../assets/customer2.jpeg" alt="Customer 1" className="customer-img" />
            <div className="quote-icon">❝</div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            <h5>John Doe</h5>
            <span>Customer</span>
          </div>
          <div className="testimonial-item">
            <img src="../assets/customer6.jpeg" alt="Customer 2" className="customer-img" />
            <div className="quote-icon">❝</div>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
            <h5>Jane Smith</h5>
            <span>Customer</span>
          </div>
          <div className="testimonial-item">
            <img src="../assets/customer3.jpeg" alt="Customer 3" className="customer-img" />
            <div className="quote-icon">❝</div>
            <p>A small river named Duden flows by their place and supplies it with the necessary.</p>
            <h5>Mike Johnson</h5>
            <span>Customer</span>
          </div>
        </div>
      </section> */}

      {/* Blog Section */}

      {/* <section className="blog-section">
        <div className="section-title">
          <p className="subheading">Our Blog</p>
          <h2>Latest News & Articles</h2>
          <p className="description">Stay updated with our latest tips, stories, and offers.</p>
        </div>
        <div className="blog-grid">
          {[1, 2, 3].map((item, index) => (
            <div className="blog-card" key={index}>
              <img src={`/images/blog${item}.jpg`} alt="Blog post" />
              <div className="blog-content">
                <p className="blog-date">June 27, 2025</p>
                <h4 className="blog-title">Healthy Eating Tips for Summer</h4>
                <Link to="#" className="read-more">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      { /* NewsLetter Section */}

      {/* <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates and special offers directly in your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section> */}

      {/* Footer Section */}
      {/* <section className="footer-section">
        <div >
          <Footer />
        </div>
      </section> */}







    </>


  );
}
