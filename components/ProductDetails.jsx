import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  // Define weight-price mappings per category
  const weightPriceMapping = {
    1: { "½ kg": product.price / 2, "1 kg": product.price }, // Pulp
    2: {
      "½ L": product.price / 2,
      "1 L": product.price,
      "5 L": product.price * 5,
    }, // Oil
    3: { "½ kg": product.price / 2, "1 kg": product.price }, // Paste
    4: { "½ kg": product.price / 2, "1 kg": product.price }, // Chutneys
    5: { "1 kg": product.price }, // Vegetables
    6: { "½ kg": product.price / 2, "1 kg": product.price }, // Dairy Delight
  };

  // Get weight options based on category
  const weightOptions = Object.keys(
    weightPriceMapping[product.categoryId] || {}
  );

  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]);
  const [currentPrice, setCurrentPrice] = useState(
    weightPriceMapping[product.categoryId][selectedWeight]
  );

  // Handle weight selection
  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    setCurrentPrice(weightPriceMapping[product.categoryId][weight]);
  };

  

  return (
    <div className="p-modal">
      <div className="p-container">
        <button className="close-button" onClick={onClose}>
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
              <span className="old-price">
                Rs. {Math.round(currentPrice * 1.3)}
              </span>
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
              <button className="add-to-cart">Add To Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="additional-information">
          <div className="tabs">
            <button className="tab active">ADDITIONAL INFORMATION</button>
          </div>
          <div className="additional-info">
            <table>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>Dietary Preference</td>
                  <td>Veg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
