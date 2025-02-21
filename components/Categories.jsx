import React, { useState } from "react";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import "./Categories.css";

const categories = [
  { id: 0, name: "All" },
  { id: 1, name: "Pulp" },
  { id: 2, name: "Oil" },
  { id: 3, name: "Paste" },
  { id: 4, name: "Chutneys" },
  { id: 5, name: "Veggies" },
  { id: 6, name: "Dairy" }
];
// -3 , -4, green peases, panner, ghee-2, khava,

const menuItems = [
  { id: 1, name: "Mango Pulp", price: 24.12, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Mango Pulp" },
  { id: 2, name: "Orange Pulp", price: 29.70, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 3, name: "Fruit Pulp", price: 8.20, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 4, name: "Fruit Pulp", price: 14.40, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 5, name: "Fruit Pulp", price: 40.30, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 6, name: "Fruit Pulp", price: 22.40, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 7, name: "Fruit Pulp", price: 12.80, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 8, name: "Fruit Pulp", price: 13.30, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fruit Pulp" },
  { id: 1, name: "Oil", price: 24.12, categoryId: 2, image: "images/oil.png", description: "Oil?" },
  { id: 2, name: "Oil", price: 29.70, categoryId: 2, image: "images/oil1.jpeg", description: "Maybe Oil" },
  { id: 3, name: "Oil", price: 8.20, categoryId: 2, image: "images/oil2.jpeg", description: "Nah not Oil" },
  { id: 6, name: "Paste", price: 22.40, categoryId: 3, image: "images/ggpaste.jpeg", description: "ggpaste" },
  { id: 7, name: "Paste", price: 12.80, categoryId: 3, image: "images/GG paste.png", description: "ggpaste" },
  { id: 8, name: "Paste", price: 13.30, categoryId: 3, image: "images/ggpaste.jpeg", description: "ggpaste" },
  { id: 1, name: "Chutney", price: 24.12, categoryId: 4, image: "images/oil.png", description: "Chutney" },
  { id: 6, name: "Spectacular Whatever Chutney", price: 22.40, categoryId: 4, image: "images/paste_og.jpeg", description: "Chutney—a luscious elixir of flavors, where sweet meets spice in a rhapsody of tangy delight. A single spoonful ignites the senses, a dance of zest and warmth that lingers like a poetic aftertaste." },
  { id: 7, name: "Chutney", price: 12.80, categoryId: 4, image: "images/GG Chutney.png", description: "ggChutney" },
  { id: 8, name: "Chutney", price: 13.30, categoryId: 4, image: "images/ggChutney.jpeg", description: "ggChutney" },
  { id: 9, name: "Peas", price: 32.90, categoryId: 5, image: "images/peas.jpg", description: "peas?" },
  { id: 10, name: "Paneer", price: 7.40, categoryId: 6, image: "images/greek_salad.jpg", description: "Fresh Mediterranean salad with feta cheese" },
  { id: 11, name: "Ghee", price: 14.10, categoryId: 6, image: "images/flavour_ice.jpg", description: "Assorted flavors of creamy ice cream" },
  { id: 12, name: "Khava", price: 52.10, categoryId: 6, image: "images/bolognese_pasta.jpg", description: "Rich Bolognese sauce with fresh pasta" },
];


const Categories = () => {

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredItems = selectedCategory === 0 
    ? menuItems 
    : menuItems.filter((item) => item.categoryId === selectedCategory);

  return (
    <>
    <div className="categories-container">

      <h1 className="title">Categories</h1>

      {/* Categories Navigation */}
      <nav className="category-nav">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? "selected" : ""}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {/* Menu Items */}
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item" onClick={() => setSelectedProduct(item)}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3>{item.name} <span className="price">Rs. {item.price.toFixed(2)}</span></h3>
              <p>{item.description}</p>
            </div>
     
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      
    </div>
    <Footer></Footer>
    </>
  );
};

export default Categories;
