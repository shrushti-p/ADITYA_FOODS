import { FaStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./CityTestimonial.css";
import { useState, useEffect } from "react";
import Footer from "./Footer";
const testimonialsData = [
  {
    rating: 4.5,
    title: "Excellent Service",
    text: "These super foods are packed with vital nutrients, including vitamins and minerals that can help keep you healthy. Plus they are easy to enjoy-just add water and let the magic happen!",
    name: "Bridget Cosmus",
    role: "Client",
  },
  {
    rating: 5.0,
    title: "Outstanding Quality",
    text: "The products exceeded my expectations. They are of great quality and worth every penny. Highly recommend to anyone seeking a healthier lifestyle.",
    name: "John Doe",
    role: "Client",
  },
  {
    rating: 4.0,
    title: "Great Support",
    text: "Customer support was very helpful and responsive. They answered all my questions and ensured I had a great experience.",
    name: "Emily Smith",
    role: "Client",
  },
  {
    rating: 4.8,
    title: "Amazing Experience",
    text: "I had an amazing experience with this product. It has made a positive impact on my daily routine. Highly satisfied!",
    name: "Michael Brown",
    role: "Client",
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
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default CityTestimonial;
