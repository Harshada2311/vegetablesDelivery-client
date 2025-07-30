import React from 'react'
import '../styles/Navbar.css';
import '../styles/OurProduct.css'
function OurProduct() {
  return (
    <div>
        <section className="product-section">
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
      </section>
    </div>
  )
}

export default OurProduct