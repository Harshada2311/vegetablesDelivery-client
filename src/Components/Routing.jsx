import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../Pages/Home'
//import Product from './ProductSection'
import Contact from './Contact'
import Footer from './Footer'
import About from '../Pages/About'
import ProductDetails from './ProductDetails'
import ProductsByCategory from './ProductsByCategory'
import ProductsByCity from './ProductsByCity'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ProtectedRoute from '../Pages/ProtectedRoute';
// import Shop from '../Components/Shop'
import Cart from '../Components/Cart'
import ProductResults from './ProductResults'
import Category from './Category'
// import ProductSection from './ProductSection';


//import { AuthProvider } from '../context/AuthContext';

//import ProductsByCategory from './ProductsByCategory'

function Routing() {
    return (
        <div>
            
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={
                        <ProtectedRoute>
                         <ProductsByCategory />
                        {/* <ProductSection /> */}
                       </ProtectedRoute>
                    } />
                    <Route path="/shop/:id" element={<ProductDetails />} />
                    <Route path="/shop/getProductsByCategory/:category" element={<ProductsByCategory />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/getProductsByCity/:city" element={<ProductsByCity />} />
                    <Route path="/shop/getProductsByCity/:city" element={<ProductResults />} />
                    <Route path="/shop/getProductsByCategoryShop/:category" element={<Category/>} />
                    {/* <Route path="/shop" element={<Shop />} /> */}
                    {/* <Route path="/wishlist" element={<Wishlist />} /> */}
                    {/* <Route path="/single-product" element={<SingleProduct />} /> */}
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/checkout" element={<Checkout />} />  */}
                </Routes>


            </Router>

        </div>



    )
}

export default Routing