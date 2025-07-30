import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';
import { useSelector } from "react-redux";

export default function Navbar() {
  const { user, logout } = useAuth();

const cartItems = useSelector((state) => state.cart.items);
  return (

    <>
      <div className="navbar-wrapper">
        <div className="top-bar">
          <div className="container d-flex justify-content-between small">
            <div>📞 +1235 2355 98</div>
            <div>✉️ youremail@email.com</div>
            <div>🚚 20–30 minutes delivery & free returns</div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light main-navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">Vegefoods</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarProductDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarProductDropdown">
                    <li><Link className="dropdown-item" to="/shop">Shop</Link></li>
                    <li><Link className="dropdown-item" to="/wishlist">Wishlist</Link></li>
                    <li><Link className="dropdown-item" to="/ProductDetails">Single Product</Link></li>
                    <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                    <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                  </ul>
                </li>

                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

                {/* === Auth Buttons Section === */}
                {user ? (
                  <>
                    <li className="nav-item">
                      <span className="nav-link">👋 Welcome, {user.name}</span>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-sm btn-outline-danger nav-link" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                  </>
                )}
                {/* === Cart Icon Section === */}
                <li className="nav-item">
                  {user ? (
                    <Link to="/cart" className="nav-link position-relative">
                      <FaShoppingCart size={20} />
                      {/* {cartItems.length > 0 && ( */}
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                      </span>
                    </Link>
                  ) : (
                    <Link to="/login" className="nav-link">
                      <FaShoppingCart size={20} />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}