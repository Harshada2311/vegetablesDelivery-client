//used this componet instead of productsByCategory component and along with productSection component

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import '../styles/product.css';
import { Link } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios
      
      .get(`${BASE_URL}/products/getProductsByCategory/${category}`)
      .then((res) => {
        if (res.data.filtercategory && Array.isArray(res.data.filtercategory)) {
          setProducts(res.data.filtercategory);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        setError("Failed to fetch products");
      });
  }, [category , BASE_URL]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert("Product Added to cart!");
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Products in "{category}" Category</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product._id}>
              <div className="card h-100">
                <Link to={`/shop/${product._id}`}>
                  <img src={product.img} className="card-img-top" alt={product.name} />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text">{product.category}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
