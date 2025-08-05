import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductSection() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/products`).then((res) => {
      const uniqueCategories = [
        ...new Set(res.data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, [BASE_URL]);

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    navigate(`/shop/getProductsByCategory/${category}`);
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleChange}
      className="form-select"
      style={{ maxWidth: "200px" }}
    >
      <option value="">All Categories</option>
      {categories.map((cat, idx) => (
        <option key={idx} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
