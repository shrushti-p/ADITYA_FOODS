import React, { useState } from "react";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  // Extract variants directly from the product object
  const weightPriceMapping = {};
  product.variants.forEach((variant) => {
    weightPriceMapping[variant.weight] = variant.price;
  });

  const weightOptions = Object.keys(weightPriceMapping);

  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]);
  const [currentPrice, setCurrentPrice] = useState(weightPriceMapping[selectedWeight]);

  // Handle weight selection
  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    setCurrentPrice(weightPriceMapping[weight]);
  };

  const handleBuyNow = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login to buy this product.");
    return;
  }

  const selectedPrice = product.variants?.find(
    (v) => v.weight === selectedWeight
  )?.price || product.price;

  const checkoutItem = {
    _id: product._id,
    name: product.name,
    image: product.image,
    price: selectedPrice,           // ✅ correct variant price
    quantity: 1,
    weight: selectedWeight,
  };

  localStorage.setItem("checkoutItem", JSON.stringify(checkoutItem));
  window.location.href = "/checkout";
};


  // Function to add product to cart
  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token"); // Ensure the user is authenticated
      if (!token) {
        alert("Please log in to add items to your cart.");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/cart/add",
        {
          productId: product._id,
          quantity: 1,
          weight: selectedWeight, // Include weight in the cart
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(response.data.message); // Show success message
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="p-modal">
      <div className="p-container">
       <button
  className="close-button"
  onClick={() => {
    if (onClose) {
      onClose();
    } else {
      // fallback to go back when opened via route
      window.history.back();
    }
  }}
>
  ✖
</button>

        <div className="p-deets">
          {/* Product Image Section */}
          <div className="p-image">
            <img className="img" src={product.image} alt={product.name} />
          </div>

          {/* Product Information Section */}
          <div className="p-info">
            <p className="bestseller">Bestseller</p>
            <p className="name">{product.name}</p>
            <p className="rating">⭐ 5.0 | 204 Reviews</p>
            <p className="price">
              Rs. {currentPrice}{" "}
              <span className="old-price">Rs. {Math.round(currentPrice * 1.3)}</span>
            </p>
            <p className="description">{product.description}</p>

            {/* Weight Selection */}
            <div className="weight-section">
              <span>Weight</span>
              {weightOptions.map((weight) => (
                <button
                  key={weight}
                  className={selectedWeight === weight ? "selected" : ""}
                  onClick={() => handleWeightChange(weight)}
                >
                  {weight}
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="buttons">
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
