import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null; // Don't render if no product is selected

  const [selectedWeight, setSelectedWeight] = useState("1L");

  return (
    <div className="p-modal">
      <div className="p-container">
        <button className="close-button" onClick={onClose}>✖</button>

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
              Rs. {product.price} <span className="old-price">Rs. {Math.round(product.price * 1.3)}</span>
            </p>
            <p className="description">{product.description}</p>

            {/* Weight Selection (Static for now, can be modified per product) */}
            <div className="weight-section">
              <span>Weight</span>
              {["1L", "2L", "5L"].map((weight) => (
                <button
                  key={weight}
                  className={selectedWeight === weight ? "selected" : ""}
                  onClick={() => setSelectedWeight(weight)}
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
            {/* <button className="tab"></button>
            <button className="tab">REVIEW</button> */}
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
