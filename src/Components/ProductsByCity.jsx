import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductsByCity() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;
    useEffect(() => {
        axios
            .get(`${BASE_URL}/products`)
            .then((response) => {
                if (response.data && Array.isArray(response.data)) {
                    const citySet = new Set();
                    response.data.forEach((product) => {
                        if (Array.isArray(product.city)) {
                            product.city.forEach((city) => citySet.add(city));
                        }
                    });

                    const uniqueCities = [...citySet];
                    setCities(uniqueCities);
                } else {
                    setCities([]);
                }
            })
            .catch((error) => console.error('Error fetching cities', error));
    }, [BASE_URL]);

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        if (city) {
            navigate(`/shop/getProductsByCity/${city}`);
        } else {
            navigate('/shop'); // Navigate to shop or home if no city is selected
        }
    };

    const handleSearch = () => {
        if (selectedCity) {
            navigate(`/shop/getProductsByCity/${selectedCity}`);
        }
    };

    return (
        <div>
            <label style={{ fontSize: '20px' }}>
                Select a City:
            </label>
            <select
                onChange={handleCityChange}
                value={selectedCity}
                className="form-select"
                style={{
                    width: '200px',
                    margin: '20px',
                    display: 'inline-block',
                    marginRight: '10px',
                    fontSize: '16px',
                    marginLeft: '10px',
                }}
            >
                <option value="">-- Select --</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <button className="btn btn-success btn-md" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default ProductsByCity;
