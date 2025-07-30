import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/product.css';

function ProductsByCategory() {
  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    alert('Product added to cart successfully!');
    dispatch(addToCart(product));
  };

  const fetchAllProducts = () => {
    setLoading(true);
    axios
      .get('http://localhost:5400/products')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setAllProducts(response.data);
          setProduct(response.data);

          const uniqueCategory = [
            ...new Set(response.data.map((r) => r.category)),
          ];
          setCategory(uniqueCategory);
        } else {
          setAllProducts([]);
          setProduct([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProduct(filtered);
  }, [searchTerm, allProducts]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setLoading(true);
    setError(null);

    if (category === '') {
      fetchAllProducts();
    } else {
      axios
        .get(`http://localhost:5400/products/getProductsByCategory/${category}`)
        .then((response) => {
          if (
            response.data.filtercategory &&
            Array.isArray(response.data.filtercategory)
          ) {
            setProduct(response.data.filtercategory);
            navigate(`/shop/getProductsByCategory/${category}`);
          } else {
            setProduct([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(`Failed to fetch products: ${error}`);
          setLoading(false);
        });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <input
            type="text"
            className="form-control mb-2 mb-md-0 me-md-3"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="form-select"
            style={{ maxWidth: '200px' }}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product._id || product.id}>
              <div className="card h-100">
                <Link to={`/shop/${product._id}`}>
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text text-muted">{product.category}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-success"
                  >
                    Add to Cart
                  </button>
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

export default ProductsByCategory;
