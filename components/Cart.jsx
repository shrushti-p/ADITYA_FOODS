import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  // Fetch cart items from the backend
  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to view your cart.");
        return;
      }

      const response = await axios.get("http://localhost:3000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Cart API Response:", response.data); // Debug log

      setCartItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Function to handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some items before checking out.");
      return;
    }
    navigate("/checkout"); // Redirect to checkout page
  };

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="cart-container">
      <h1 className="title">
        Shopping Cart <br />
        <img
          src="/images/section_delimiter_1.png"
          alt="img"
          className="title_bottom"
        />
      </h1>
      <div className="cart-content">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <td>Product</td>
                <td>Weight</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="6">Your cart is empty.</td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="product-info">
                        <img
                          src={item.image || "/images/default.png"}
                          alt={item.name || "Unnamed"}
                        />
                        <div>
                          <h4>{item.name || "No Name"}</h4>
                          <p>Color: {item.color || "Unknown"}</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.weight ? `${item.weight}` : "Not specified"}</td>
                    <td>
                      <div className="quantity-controls">
                        <button
                          onClick={() => handleQuantityChange(item._id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item._id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>₹{(item.price || 0).toFixed(2)}</td>
                    <td>₹{((item.price || 0) * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(item._id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Sub Total: ₹{totalPrice.toFixed(2)}</p>
          <p>Delivery Fee: ₹50.00</p>
          <h3>Total: ₹{(totalPrice + 50).toFixed(2)}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}
