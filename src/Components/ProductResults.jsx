import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import '../styles/product.css';

function ProductResults() {
  const { city } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    alert("Product added to cart successfully!");
    dispatch(addToCart(product));
  };


  useEffect(() => {
    axios
      .get(`https://vegetablesdelivery-server.onrender.com/products/getProductsByCity/${city}`)
      .then((response) => {
        if (response.data.filtercity && Array.isArray(response.data.filtercity)) {
          setProducts(response.data.filtercity);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        setError("Failed to fetch products");
      });
  }, [city]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Products in {city}</h2>
        <div className="row">
      {error && <p>{error}</p>}
      {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product._id || product.id}>
              <div className="card h-100">
                <Link to={`/shop/${product._id}`}>
                  <img src={product.img} className="card-img-top" alt={product.name} />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text text-muted">{product.category}</p>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-success">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found for this category.</p>
        )}
    </div>
    </div>
  );
}

export default ProductResults;
