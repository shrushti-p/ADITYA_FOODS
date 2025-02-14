import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Recipes", path: "/recipes" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="navbar">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="logo">
          <img src="images/logo.png" alt="Logo" />
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
            <li key={item.name} className="nav-item">
              <Link to={item.path} className="nav-link">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
