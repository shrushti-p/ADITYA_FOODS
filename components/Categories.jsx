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
  { id: 5, name: "Vegetables" },
  { id: 6, name: "Dairy Delight" }
];

const menuItems = [
  { id: 1, name: "Rabdi Pulp", price: 200, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Delicious Rabdi Pulp (1kg)" },
  { id: 2, name: "Jamun Pulp", price: 350, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Fresh Jamun Pulp (1kg)" },
  { id: 3, name: "Mango Pulp", price: 270, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Ripe Mango Pulp (1kg)" },
  { id: 4, name: "Guava Pulp", price: 150, categoryId: 1, image: "images/fruit_pulp.jpeg", description: "Tasty Guava Pulp (1kg)" },
  { id: 5, name: "Peanut Oil", price: 160, categoryId: 2, image: "images/oil.png", description: "Pure Peanut Oil (1L)" },
  { id: 6, name: "Kardi Oil", price: 230, categoryId: 2, image: "images/oil1.jpeg", description: "Healthy Kardi Oil (1L)" },
  { id: 7, name: "Ginger Garlic Paste", price: 100, categoryId: 3, image: "images/ggpaste.jpeg", description: "Fresh Ginger Garlic Paste (1kg)" },
  { id: 8, name: "Peanut Chutney", price: 240, categoryId: 4, image: "images/chutney.jpeg", description: "Tasty Peanut Chutney (1kg)" },
  { id: 9, name: "Javas Chutney", price: 250, categoryId: 4, image: "images/chutney.jpeg", description: "Rich Javas Chutney (1kg)" },
  { id: 10, name: "Green Peas", price: 90, categoryId: 5, image: "images/peas.jpg", description: "Fresh Green Peas (1kg)" },
  { id: 11, name: "Paneer", price: 280, categoryId: 6, image: "images/paneer.jpg", description: "Soft Paneer (1kg)" },
  { id: 12, name: "Khava", price: 300, categoryId: 6, image: "images/khava.jpg", description: "Traditional Khava (1kg)" },
  { id: 13, name: "Ghee", price: 800, categoryId: 6, image: "images/ghee.jpg", description: "Pure Ghee (1kg)" },
  { id: 14, name: "Cow Ghee", price: 600, categoryId: 6, image: "images/cow_ghee.jpg", description: "Premium Cow Ghee (1kg)" }
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
      <h1 className="title">Categories <br /><img src="images/section_delimiter_1.png" alt="img" class="title_bottom"/><img src="images/peanut.png" alt="Floating peanut" className="floating-peanut" /></h1>
      
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

      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      
    </div>
    <Footer></Footer>
    </>
  );
};

export default Categories;
