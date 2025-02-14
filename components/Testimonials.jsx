import { FaStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollForward = () => {
    if (currentIndex < testimonialsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleScrollBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="test-outer">
      <div className="test-left">
        <h2 className="test-head-testimonial">Testimonials</h2>
        <img
          className="test-background"
          src="/images/Background.jpg"
          alt="Background"
        />
        <div className="test-par">
          What Our
          <br />
          Customer's Say?
        </div>

        <button type="button" className="btn btn-danger test-btn">
          Read All <SlArrowRight />
        </button>

        <button
          className="test-scroll-button forward"
          onClick={handleScrollForward}
          disabled={currentIndex === testimonialsData.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="test-Wrap">
        <div className="test-right">
          <button
            className="test-scroll-button backward"
            onClick={handleScrollBackward}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>

          <div className="test-container-wrapper">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="test-container"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <div className="test-star">
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
                  <h5>{testimonial.title}</h5>
                </div>

                <div className="test-para">
                  <p>{testimonial.text}</p>
                </div>

                <div className="test-third">
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;