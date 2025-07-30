import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/LoginRegister.css'

function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5400/api/auth/register", form);
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed.");
        }

    };


return (
    <div className="auth-container">
        <h2 className="auth-title">Register</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form  className="auth-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    </div>
)
}

export default Register