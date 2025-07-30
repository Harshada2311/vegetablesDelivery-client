import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Blog() {
  return (
    <div>
        <section className="blog-section">
        <div className="section-title">
          <p className="subheading">Our Blog</p>
          <h2>Latest News & Articles</h2>
          <p className="description">Stay updated with our latest tips, stories, and offers.</p>
        </div>
        <div className="blog-grid">
          {[1, 2, 3].map((item, index) => (
            <div className="blog-card" key={index}>
              <img src={`https://preview.colorlib.com/theme/vegefoods/images/image_1.jpg.webp`} alt="Blog post" />
              <div className="blog-content">
                <p className="blog-date">June 27, 2025</p>
                <h4 className="blog-title">Healthy Eating Tips for Summer</h4>
                <Link to="#" className="read-more">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* NewsLetter Section */}
       <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates and special offers directly in your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog