import React from 'react'
import '../styles/Navbar.css';

function DealOfDay() {
  return (
    <div>
        <section className="deal-of-day">
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
      </section>

    </div>
  )
}

export default DealOfDay