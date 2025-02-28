import React, { useEffect, useRef } from "react";
import "./HeroProducts.css";

function HeroProducts() {
  const categories = [
    {
      name: "Fruits",
      products: [
        { id: 1, name: "custerdapple pulp", price: 2.5, image: "images/paste_og.jpeg", sales: 50, description: "A silky-smooth blend of natures sweetest delight, bursting with the rich, tropical essence of custard apple. Velvety, fragrant, and irresistibly luscious, this pulp brings a melt-in-your-mouth sweetness that transforms every dish into a heavenly indulgence!" },
        { id: 2, name: "Amla Candy", price: 1.2, image: "images/paste_og.jpeg", sales: 75, description: "Sweet & Tangy Nourishment! A perfect blend of zest and sweetness, packed with amlas natural goodness for a refreshing, healthy treat!" },
        { id: 3, name: "Peanut Oil", price: 1.8, image: "images/paste_og.jpeg", sales: 40, description: "Pure & Nutty Goodness! Rich in flavor and nutrients, this golden oil enhances your cooking with a smooth, aromatic touch!" },
        { id: 4, name: "Safflower Oil", price: 1.0, image: "images/paste_og.jpeg", sales: 65, description: "Light & Heart-Healthy Purity! A golden, mild-flavored oil rich in goodness, enhancing your dishes with a delicate touch while preserving natural flavors for wholesome perfection!." },
      ],
    },
    {
      name: "Vegetables",
      products: [
        { id: 5, name: "Green Peas", price: 2.0, image: "images/paste_og.jpeg", sales: 55, description: "A Burst of Freshness & Sweet Delight! Tender, vibrant, and naturally sweet, these little gems add a pop of color, flavor, and wholesome goodness to every dish. A true kitchen essential!" },
        { id: 6, name: "Ginger Paste", price: 1.5, image: "images/paste_og.jpeg", sales: 80, description: "Fiery Zest & Warmth in Every Spoonful! A smooth and aromatic blend of pure ginger, packed with bold, peppery warmth to enhance your dishes. Elevate your cooking with its rich, zesty essence!" },
        { id: 7, name: "Garlic Paste", price: 1.0, image: "images/paste_og.jpeg", sales: 65, description: "Bold & Aromatic Essence in Every Spoonful! A smooth, velvety blend of rich, pungent garlic, crafted to add depth, warmth, and an irresistible burst of flavor to your dishes. Elevate your cooking with its robust aroma and savory perfection!" },
        { id: 8, name: "Peanut Chutney", price: 1.0, image: "images/paste_og.jpeg", sales: 50, description: "Nutty Fusion of Rich & Spicy Goodness! A creamy blend of roasted peanuts and bold spices, crafted to deliver a perfect balance of crunch, heat, and irresistible flavor. Every spoonful adds a savory depth, elevating your meals with its earthy, zesty essence!" },
      ],
    },
  ];

  const topSellingProducts = categories
    .flatMap((category) => category.products)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 8);

  useEffect(() => {
    const products = document.querySelectorAll(".product");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-active");
            entry.target.classList.remove("scroll-out");
          } else {
            entry.target.classList.add("scroll-out");
            entry.target.classList.remove("scroll-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    products.forEach((product) => observer.observe(product));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-page">
      <div className="city-heading">
        <h2 className="section_title">Our Hero Products</h2>
        <img src="images/section_delimiter_1.png" alt="img" className="section_devider" />
        <img src="images/panner.png" alt="Floating custerdapple" className="floating-burger4" />
      </div>
      <div className="products-container-hero">
        {topSellingProducts.map((product, index) => (
          <div
            key={product.id}
            className={`product ${index % 2 === 0 ? "from-left" : "from-right"}`}
          >
            <div className={`prod-information ${index % 2 === 0 ? "align-left" : "align-right"}`}>
              <img src={product.image} className="product-image" alt={product.name} />
              <div className="prod-name">
                <h2 className="h3">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">₹{product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroProducts;
