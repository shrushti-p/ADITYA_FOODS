import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./App.css";

import Navbar from "../components/Navbar";
import InspiringRecipes from "../components/InspiringRecipes";
import HomePage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import SignupPage from "../components/SignupPage";
import StatsSection from "../components/StatsSection";
import HowToOrder from "../components/HowToOrder";
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails"; // Modal
import HeroProducts from "../components/HeroProducts";
import Testimonials from "../components/Testimonials";
import CityTestimonial from "../components/CityTestimonial";
import Cart from "../components/Cart";
import Login from "../components/LoginPage";
import Checkout from "../components/Checkout";
import ProductDetailsPage from "../components/ProductDetailsPage"; // Full page (optional)

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Router>
        <Navbar setSelectedProduct={setSelectedProduct} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories setSelectedProduct={setSelectedProduct} />} />
          <Route path="/recipes" element={<InspiringRecipes />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/hero-products" element={<HeroProducts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/citytestimonial" element={<CityTestimonial />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          {/* Optional: Separate product details page */}
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>

        {/* 🔹 Show modal if a product is selected */}
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        <Footer />
      </Router>
    </>
  );
}

export default App;
