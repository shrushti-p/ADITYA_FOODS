import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [search, setSearch] = useState("");

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Categories", path: "/categories" },
    { id: 3, name: "Recipes", path: "/recipes" },
    { id: 4, name: "Testimonials", path: "/testimonials" },
    { id: 5, name: "About Us", path: "/about" },
  ];

  return (
    <nav className="navbar">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="logo">
        </div>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="home-icon">
          <FaUser className="iconss" />
          <FaShoppingCart className="iconss" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name} className={`nav-item ${selectedCategory === item.id ? "selected" : ""}`} onClick={() => setSelectedCategory(item.id)}>
              <Link to={item.path} className="nav-link">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
