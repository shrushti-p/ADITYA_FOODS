import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All"
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]); // Store all products

  useEffect(() => {
    fetch("http://localhost:3000/api/categories-with-products")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setAllProducts(data.flatMap((cat) => cat.products)); // Store all products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="categories-container">
        <h1 className="title">
          Categories <br />
          {/* <img
            // src="images/section_delimiter_1.png"
            alt="img"
            className="title_bottom"
          /> */}
          {/* <img
            src="images/peanut.png"
            alt="Floating peanut"
            className="floating-peanut"
          /> */}
        </h1>

        <nav className="category-nav">
          {categories.map((category) => (
            <button
              key={category._id}
              className={`category-button ${
                selectedCategory === category.name ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </nav>

        <div className="menu-items">
          {selectedCategory === "All"
            ? allProducts.map((item) => (
                <div
                  key={item._id}
                  className="menu-item"
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />
                  <div className="menu-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    {item.variants.map((variant, index) => (
                      <p key={index} className="price">
                        {variant.weight} - {variant.price}/-
                      </p>
                    ))}
                  </div>
                </div>
              ))
            : categories
                .filter((cat) => cat.name === selectedCategory)
                .flatMap((cat) => cat.products)
                .map((item) => (
                  <div
                    key={item._id}
                    className="menu-item"
                    onClick={() => setSelectedProduct(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-image"
                    />
                    <div className="menu-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      {item.variants.map((variant, index) => (
                        <p key={index} className="price">
                          {variant.weight} - Rs. {variant.price}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
        </div>

        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Categories;
