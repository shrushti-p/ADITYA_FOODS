import { FaStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./CityTestimonial.css";
import { useState, useEffect } from "react";
import Footer from "./Footer";
const testimonialsData = [
  {
    rating: 4.5,
    text: "The mango pulp is consistently fresh and of premium quality. Our customers love the natural sweetness, making it a bestseller for mango-based desserts and beverages.",
    role: "Client-Pune",
    
  },
  {
    rating: 5.0,
    text:  "We have been sourcing mango pulp in bulk, and the taste and texture remain uniform in every batch. Perfect for large-scale juice production!",
    role: "Client-Latur",
  },
  {
    rating: 4.0,
    text: "Rich in flavor and color, this mango pulp enhances the taste of our sweets and milkshakes. A must-have for our business!",
    role: "Client-Hyderabad",
  },
  {
    rating: 4.8,
    text: "The custard apple pulp is creamy and naturally sweet. It blends perfectly in our ice creams and desserts, making it a customer favorite.",
    role: "Client-Nagpur",
  },
  {
    rating: 4.5,
    text: "Exceptional quality! The pulp is thick, fresh, and free from artificial preservatives, making it ideal for our large-scale production.",
    role: "Client-Nashik",
  },
  {
    rating: 4.0,
    text: "This guava pulp has a rich aroma and a perfect balance of sweetness and tanginess. It helps us maintain consistency in our fruit-based products.",
    role: "Client-Mumbai",
  },
  {
    rating: 4.2,
    text: "We use it for making juices and jams, and the quality never disappoints. It’s fresh, natural, and always delivered on time.",
    role: "Client-Aurangabad",
  },
  {
    rating: 4.2,
    text: "The jamun pulp retains the authentic taste and color, making it a valuable ingredient in our health drinks and desserts.",
    role: "Client-Nanded",
  },
  {
    rating: 4.4,
    text: "We order in bulk, and the quality remains uniform across shipments. The pulp is fresh, smooth, and free from artificial flavors.",
    role: "Client-Parbhani",
  },
  {
    rating: 4.0,
    text: "The peas are sweet, fresh, and well-packed. They retain their vibrant green color even after cooking, which is crucial for our frozen food business.",
    role: "Client-Jalna",
  },
  {
    rating: 4.8,
    text: "Best quality green peas we have used. They cook well and maintain their texture, making them ideal for large-scale catering services.",
    role: "Client-Beed",
  },
  {
    rating: 4.5,
    text: "The paste has a strong aroma and authentic taste. It saves us time in bulk food preparation without compromising on flavor.",
    role: "Client-Bengaluru",
  },
  {
    rating: 4.8,
    text: "Consistently good quality and no artificial preservatives. Our restaurant chain relies on this for maintaining the taste of our dishes.",
    role: "Client-Solapur",
  },
  {
    rating: 4.9,
    text: "Soft, fresh, and perfect for bulk orders. The texture remains intact even after frying or cooking in gravies.",
    role: "Client-Tuljapur",
  },
  {
    rating: 4.82,
    text: "High-quality paneer that absorbs spices well. Our customers appreciate the freshness in every bite!",
    role: "Client-Pandharpur",
  },
  {
    rating: 4.0,
    text: "We have been ordering in bulk for our sweet manufacturing unit, and the quality remains top-notch every time!",
    role: "Client-Gulbarga",
  },
  {
    rating: 4.1,
    text: "Pure and aromatic ghee that enhances the taste of our sweets and food products. Our customers love the authentic flavor.",
    role: "Client-Akola",
  },
  {
    rating: 4.0,
    text: "The richness and purity of this ghee make it stand out. It adds a homemade touch to all our dairy-based items.",
    role: "Client-Sangli",
  },
  {
    rating: 4.3,
    text: "High-quality peanut oil that enhances the taste of traditional dishes. It’s pure and perfect for large-scale cooking.",
    role: "Client-Satara",
  },
    {
    rating: 4.4,
    text: "A light and healthy oil that meets our bulk cooking needs. It’s our go-to option for preparing large-scale meals.",
    role: "Client-Osmanabad",
  },
];

const CityTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 728);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonialsData.length ? 0 : prevIndex + 2
    );
  };

  const handleScrollBackward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className={`city-outer ${isMobile ? "mobile-view" : ""}`}>
      <div className="city-heading">
        <h2 className="section_title">
          {" "}
          Testimonials of Clients From Different Cities
        </h2>

        <img
          src="images/section_delimiter_1.png"
          alt="img"
          class="section_devider"
        />
      </div>

      <div className="city-right">
        <div className="Wrap">
          <div className="city-container-wrapper">
            <div className="city-arrows">
              <button
                className="city-scroll-button backward"
                onClick={handleScrollBackward}
              >
                <FaArrowLeft />
              </button>

              <button
                className="city-scroll-button forward"
                onClick={handleScrollForward}
              >
                <FaArrowRight />
              </button>
            </div>
            {testimonialsData
              .slice(currentIndex, currentIndex + 2)
              .map((testimonial, index) => (
                <div key={index} className="city-container">
                  <div className="city-star">
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            style={{ color: "gold", fontSize: "15px" }}
                          />
                        )
                      )}
                      {testimonial.rating} / 5.0
                    </div>
                    <br />
                    <h5 className="city-container-heading">
                      {testimonial.title}
                    </h5>
                  </div>

                  <div className="city-para">
                    <p>{testimonial.text}</p>
                  </div>

                  <div className="city-third">
                    <h5 className="city-container-heading">
                      {testimonial.name}
                    </h5>
                    <p className="city-role">{testimonial.role}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default CityTestimonial;
