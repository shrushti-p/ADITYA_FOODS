import React from "react";
import "./Categories.css";

function HeroProducts() {
  const categories = [
    {
      name: "Fruits",
      products: [
        { id: 1, name: "Apple", price: 2.5, image: "images/awla_candy.jpeg", sales: 50 },
        { id: 2, name: "Banana", price: 1.2, image: "images/ggpaste.jpeg", sales: 75 },
        { id: 3, name: "Orange", price: 1.8, image: "images/oil", sales: 40 },
      ],
    },
    {
      name: "Vegetables",
      products: [
        { id: 7, name: "Carrot", price: 1.0, image: "https://via.placeholder.com/100", sales: 65 },
        { id: 8, name: "Broccoli", price: 2.0, image: "https://via.placeholder.com/100", sales: 55 },
        { id: 9, name: "Tomato", price: 1.5, image: "https://via.placeholder.com/100", sales: 80 },
      ],
    },
    {
      name: "Dairy",
      products: [
        { id: 13, name: "Milk", price: 3.0, image: "https://via.placeholder.com/100", sales: 90 },
        { id: 14, name: "Cheese", price: 5.0, image: "https://via.placeholder.com/100", sales: 85 },
        { id: 15, name: "Butter", price: 4.0, image: "https://via.placeholder.com/100", sales: 60 },
      ],
    },
  ];

  // Flatten all products into a single array and sort by sales in descending order
  const topSellingProducts = categories
    .flatMap(category => category.products)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 6);

  return (
    <>
      <h1 className="heading">Top Selling Products</h1>
      <div className="products-container-hero">
        {topSellingProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} className="product-image" alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeroProducts;
