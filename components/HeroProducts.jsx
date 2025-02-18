import React from "react";
import "./HeroProducts.css";

function HeroProducts() {
  const categories = [
    {
      name: "Fruits",
      products: [
        { id: 1, name: "Apple", price: 2.5, image: "images/paste_og.jpeg", sales: 50, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 2, name: "Banana", price: 1.2, image: "images/paste_og.jpeg", sales: 75, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 3, name: "Orange", price: 1.8, image: "images/paste_og.jpeg", sales: 40, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 7, name: "Carrot", price: 1.0, image: "images/paste_og.jpeg", sales: 65, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 8, name: "Broccoli", price: 2.0, image: "images/paste_og.jpeg", sales: 55, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste.." },
      ],
    },
    {
      name: "Vegetables",
      products: [
        { id: 7, name: "Carrot", price: 1.0, image: "images/paste_og.jpeg", sales: 65, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 8, name: "Broccoli", price: 2.0, image: "images/paste_og.jpeg", sales: 55, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 9, name: "Tomato", price: 1.5, image: "images/paste_og.jpeg", sales: 80, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 7, name: "Carrot", price: 1.0, image: "images/paste_og.jpeg", sales: 65, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 8, name: "Broccoli", price: 2.0, image: "images/paste_og.jpeg", sales: 55, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
      ],
    },
    {
      name: "Dairy",
      products: [
        { id: 13, name: "Milk", price: 3.0, image: "images/paste_og.jpeg", sales: 90, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 14, name: "Cheese", price: 5.0, image: "images/paste_og.jpeg", sales: 85, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 15, name: "Butter", price: 4.0, image: "images/paste_og.jpeg", sales: 60, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 13, name: "Milk", price: 3.0, image: "images/paste_og.jpeg", sales: 90, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
        { id: 14, name: "Cheese", price: 5.0, image: "images/paste_og.jpeg", sales: 85, description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
      ],
    },
  ];

  const topSellingProducts = categories
    .flatMap(category => category.products)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 12);

  return (
    <>
      <h1 className="heading">Top Selling Products</h1>
      <div className="products-container-hero">
        {topSellingProducts.map((product) => (
          <div key={product.id} className="product">
            <div className="prod-information">
            <img src={product.image} className="product-image" alt={product.name} />
            <div className="prod-name">
            <h2 className="h3">{product.name}</h2>
            <p className="product-price">₹{product.price.toFixed(2)}</p></div>
            </div>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeroProducts;
