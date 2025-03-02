import React, { useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Furniture Set", color: "Coffee", price: 437, quantity: 4, image: "/images/furniture.png" },
    { id: 2, name: "Vintage Dining Set", color: "Brown", price: 945, quantity: 2, image: "/images/dining.png" },
    { id: 3, name: "Studio Chair", color: "Deep Green", price: 597, quantity: 7, image: "/images/chair.png" },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="title">Shopping Cart <br /><img src="images/section_delimiter_1.png" alt="img" class="title_bottom"/></h1>
      <div className="cart-content">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <td>Product Code</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-info">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>Set : Colour: {item.color}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                  </td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => handleRemove(item.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Sub Total: ₹{totalPrice.toFixed(2)}</p>
          <p>Delivery Fee: ₹50.00</p>
          <h3>Total: ₹{(totalPrice + 50).toFixed(2)}</h3>
          <button className="checkout-btn">Checkout Now</button>
        </div>
      </div>
    </div>
  );
}
