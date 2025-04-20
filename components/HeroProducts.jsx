import React, { useEffect, useRef } from "react";
import "./HeroProducts.css";

function HeroProducts() {
  const categories = [
    {
      name: "Fruits",
      products: [
        {
          id: 1,
          name: "Custurd Apple Pulp",
          price: 200,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745058621/rbdi_qn0aas.jpg",
          sales: 50,
          description:
            "A silky-smooth blend of natures sweetest delight, bursting with the rich, tropical essence of custard apple. Velvety, fragrant, and irresistibly luscious, this pulp brings a melt-in-your-mouth sweetness that transforms every dish into a heavenly indulgence!",
        },
        {
          id: 2,
          name: "Amla Candy",
          price: 300,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745058647/amla_candy_mzrzzq.jpg",
          sales: 75,
          description:
            "Sweet & Tangy Nourishment! A perfect blend of zest and sweetness, packed with amlas natural goodness for a refreshing, healthy treat!",
        },
        {
          id: 3,
          name: "Peanut Oil",
          price: 160,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745046740/peanut_dd2cba.jpg",
          sales: 40,
          description:
            "Pure & Nutty Goodness! Rich in flavor and nutrients, this golden oil enhances your cooking with a smooth, aromatic touch!",
        },
        {
          id: 4,
          name: "Kardi Oil",
          price: 230,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745047152/Kardi_oop5ny.jpg",
          sales: 65,
          description:
            "Light & Heart-Healthy Purity! A golden, mild-flavored oil rich in goodness, enhancing your dishes with a delicate touch while preserving natural flavors for wholesome perfection!.",
        },
      ],
    },
    {
      name: "Vegetables",
      products: [
        {
          id: 5,
          name: "Green Peas",
          price: 90,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745060999/green_peas_b6njvt.jpg",
          sales: 55,
          description:
            "A Burst of Freshness & Sweet Delight! Tender, vibrant, and naturally sweet, these little gems add a pop of color, flavor, and wholesome goodness to every dish. A true kitchen essential!",
        },
        {
          id: 6,
          name: "Ginger Paste",
          price: 100,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745047556/Ginger_gizthv.jpg",
          sales: 80,
          description:
            "Fiery Zest & Warmth in Every Spoonful! A smooth and aromatic blend of pure ginger, packed with bold, peppery warmth to enhance your dishes. Elevate your cooking with its rich, zesty essence!",
        },

        {
          id: 6,
          name: "Mango Pulp",
          price: 270,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745057461/mango_pulp_eajyza.jpg",
          sales: 80,
          description:
            "Sun ripened mangoes, handpicked at peak sweetness, pured into a velvty,golden pulp. Bursting with tropical flavour and natural aroma, perfect for smoothies, desserts or drinks. A spoonful of sunshine that brings summer to every bite!",
        },

        {
          id: 8,
          name: "Peanut Chutney",
          price: 240,
          image:
            "https://res.cloudinary.com/de7lcfzph/image/upload/v1745057264/peanut_dw4vu3.jpg",
          sales: 50,
          description:
            "Nutty Fusion of Rich & Spicy Goodness! A creamy blend of roasted peanuts and bold spices, crafted to deliver a perfect balance of crunch, heat, and irresistible flavor. Every spoonful adds a savory depth, elevating your meals with its earthy, zesty essence!",
        },
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
        <img
          src="images/section_delimiter_1.png"
          alt="img"
          className="section_devider"
        />
        <img
          src="images/panner.png"
          alt="Floating custerdapple"
          className="floating-burger4"
        />
      </div>
      <div className="products-container-hero">
        {topSellingProducts.map((product, index) => (
          <div
            key={product.id}
            className={`product ${
              index % 2 === 0 ? "from-left" : "from-right"
            }`}
          >
            <div
              className={`prod-information ${
                index % 2 === 0 ? "align-left" : "align-right"
              }`}
            >
              <img
                src={product.image}
                className="product-image"
                alt={product.name}
              />
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
