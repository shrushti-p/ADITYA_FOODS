import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  useEffect(() => {
    const buyNowItem = localStorage.getItem("checkoutItem");

    if (buyNowItem) {
      const parsedItem = JSON.parse(buyNowItem);
      setCartItems([parsedItem]);
      setLoading(false);
    } else {
      fetchCartItems();
    }
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to continue");
        return;
      }
      const response = await axios.get("http://localhost:3000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!address.name || !address.phone || !address.street || !address.city || !address.pincode) {
      alert("Please fill in all address details");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/api/orders",
        { cartItems, address, paymentMethod },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Clear the buy now item if present
      localStorage.removeItem("checkoutItem");

      alert("Order placed successfully!");
      navigate("/order-success");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  if (loading) return <p>Loading checkout...</p>;

  if (!cartItems.length) {
    return (
      <div className="checkout-container">
        <h2>No items to checkout</h2>
        <a href="/">Go back to products</a>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        {/* Address Section */}
        <div className="address-form">
          <h3>Delivery Address</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={address.phone}
            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Street Address"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
          />
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="order-item">
              <span>
                {item.name} ({item.weight}) x{item.quantity}
              </span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
          <p>Delivery Fee: ₹50.00</p>
          <h3>Total: ₹{(totalPrice + 50).toFixed(2)}</h3>
        </div>

        {/* Payment Method */}
        <div className="payment-options">
          <h3>Payment Method</h3>
          <label>
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
            />{" "}
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={() => setPaymentMethod("UPI")}
            />{" "}
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={() => setPaymentMethod("Card")}
            />{" "}
            Credit/Debit Card
          </label>
        </div>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
