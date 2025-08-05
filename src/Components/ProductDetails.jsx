import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/product.css';
import '../styles/ProductDetails.css'
import '../styles/review.css'
//import { useAuth } from '../context/AuthContext';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProduct] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" })
    //const { user } = useAuth();
    const dispatch = useDispatch();
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

   const handleAddToCart = (product) => {
       console.log("Adding to cart:", product);
       alert("Product added to cart successfully!");
       dispatch(addToCart(product));
       //http://localhost:5400
     };

    useEffect(() => {
        
         axios.get(`${BASE_URL}/products/${id}`)
            .then((response) => {
                setProduct(response.data.filterId);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch products Details.");

            })
    }, [id , BASE_URL]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.username && newReview.comment) {
            const updatedReviews = [...(products.reviews || []), newReview];
            setProduct({ ...products, reviews: updatedReviews });
            setNewReview({ username: "", rating: 5, comment: "" });

        }
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!products) return <div className="text-center py-5">Loading product details...</div>;

    const averageRating = products.reviews?.length
        ? (products.reviews.reduce((sum, review) => sum + review.rating, 0) / products.reviews.length).toFixed(1)
        : "No Rating yet";

    return (
        <div className="product-details-container">
            <div className="product-image">
                <img src={products.img} alt={products.name} />
            </div>
            <div className="product-info">
                <h1 className="product-title">{products.name}</h1>
                <p className="product-price">{products.price}</p>
                <p className="product-description">{products.description}</p>
                <p className="average-rating">⭐ {averageRating} / 5</p>
                <div className="quantity-container">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        defaultValue="1"
                    />
                </div>

                <button onClick={() => handleAddToCart(products)} className="add-to-cart-btn">Add to Cart</button>
                <button onClick={() => navigate(-1)} className="add-to-cart-btn btn-gap">⬅ Go Back</button>
            </div>
            <div className="reviews-section">
                <h2>Customer Reviews</h2>
                {
                    products.reviews?.length > 0 ? (
                        products.reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <p className='review-user'><strong>{review.username}</strong>⭐ {review.rating}/5</p>
                                <p className="review-comment">"{review.comment}"</p>
                            </div>
                        ))

                    ) : (
                        <p>No review yet.</p>
                    )
                }

            </div>
            <div className="add-review-section">
                <h2>Add a Review</h2>
                <form className="review-form" onSubmit={handleReviewSubmit}>
                    <input type="text"
                        placeholder='your Name'
                        value={newReview.username}
                        onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
                        required
                    />
                    <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <option key={rating} value={rating}>{rating} Starts</option>
                        ))}
                    </select>
                    <textarea placeholder='Write a review...'
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        required
                    />
                    <button type="submit" className="submit-button">Submit Review</button>
                </form>
            </div>
        </div>

    )
}

export default ProductDetails