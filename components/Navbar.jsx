import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import "./Navbar.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (search.trim()) {
      const results = products.filter((product) =>
        product.name?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [search, products]);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Categories", path: "/categories" },
    { id: 3, name: "Recipes", path: "/recipes" },
    { id: 4, name: "Testimonials", path: "/testimonials" },
    { id: 5, name: "About Us", path: "/about" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/" className="logo-link"></Link>
        </div>

        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="home-icon">
          <Link to="/login">
            <FaUser className="iconss" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="iconss" />
          </Link>
        </div>
      </div>

      {search ? (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            <div className="search-list">
              {filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  className="search-result-item"
                >
                  <img
                    src={product.image || "/default-product.jpg"}
                    alt={product.name}
                    className="search-result-img"
                  />
                  <div className="search-result-text">
                    <p className="search-result-name">{product.name}</p>
                    <p className="search-result-price">
                      ₹{product.variants?.[0]?.price || "N/A"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="no-results">No matching products found</p>
          )}
        </div>
      ) : (
        <div className="nav-bar">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <NavLink
                  to={item.path}
                  end={item.path === "/"} // only apply "end" for Home
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
