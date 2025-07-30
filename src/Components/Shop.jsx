import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css';

function Shop() {
  const [categories, setCategories] = useState([]);
 
  const navigate = useNavigate();

  // Fetch unique categories once
  useEffect(() => {
    axios.get("https://vegetablesdelivery-server.onrender.com/products")
      .then((res) => {
        const unique = [...new Set(res.data.map((product) => product.category))];
        setCategories(unique);
      })
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  const handleClick = (category) => {
     
    navigate(`/shop/getProductsByCategoryShop/${category}`);
  };

  return (
    <div>
      <section className="shop-now-section">
        <h2 className="section-title">Shop By Category</h2>
        <p>Protect the health of every home</p>

        <div className="shop-now-grid">
          {categories.map((category, index) => (
            <div key={index} className="shop-now-box">
              <h3>{category}</h3>
              
              {/* You can customize category image selection here */}
              <img
                src={`../assets/${category.toLowerCase()}.jpeg`}
                alt={category}
                onError={(e) => e.target.src = "../assets/default.jpg"} // fallback
              />

              <button onClick={() => handleClick(category)}>Shop now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shop;
