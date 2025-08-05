import React from "react";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item._id || item.id));
        //console.log("Item removed from cart:", item);
        alert("Item removed from cart");
    };

    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    ).toFixed(2);

    useEffect(() => {
        console.log("Updated cart:", cartItems);
    }, [cartItems]);
    return (
        <>
            <div className="container py-4" style={{ marginTop: "40px" }}>
                <h2>Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className="list-group mb-3 ">
                        {cartItems.map((item) => (
                            <li key={item._id || item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{item.name} (x{item.quantity})</span>
                                <span style={{ flexGrow: 0 , marginRight: "20px" }}>₹{item.price * item.quantity}</span>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => {
                                        handleRemoveFromCart(item);
                                        //console.log("Item removed:", item.id || item._id);
                                    }}
                                >
                                 Remove
                                </button>
                            </li>
                        ))}

                        <div className="" style={{ textAlign: "right", marginTop: "20px" }}>
                            <h5>Total: ₹{total}</h5>
                        </div>

                        <div style={{ textAlign: "center", marginTop: "20px", gap: "10px", display: "flex", justifyContent: "center" }}>
                            <button className="btn btn-primary" onClick={() => alert("Proceeding to Checkout")}>Proceed to Checkout</button>
                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/shop")}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Cart;
