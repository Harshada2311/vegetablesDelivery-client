import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-about">
          <h4>Vegefoods</h4>
          <p>Fresh, organic vegetables delivered straight to your door with love and care.</p>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>📍 123 Green Street, Veg City</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ info@vegefoods.com</p>
        </div>

        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vegefoods. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
