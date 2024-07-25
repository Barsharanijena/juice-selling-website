import React, { useState } from "react";
import { testimonials } from "../testimonials";
import "bootstrap/dist/css/bootstrap.min.css";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="testimonial-section py-5"
      style={{ backgroundColor: "#fff", textAlign: "center" }}
    >
      <div className="container">
        <h2
          className="testimonial-heading"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "30px",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          What Our Clients Are Saying{" "}
          <span style={{ color: "#FCCB68" }}>!!</span>
        </h2>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-outline-secondary"
            onClick={prevTestimonial}
            style={{ borderRadius: "50%", padding: "10px 15px" }}
          >
            &#10094;
          </button>
          <div
            className="testimonial mx-3 p-3 rounded shadow"
            style={{
              backgroundColor: "#FCCB68", // Testimonial box color
              padding: "20px",
              border: "1px solid #ddd",
              minWidth: "300px",
              maxWidth: "600px",
            }}
          >
            <p style={{ fontStyle: "italic", margin: 0 }}>
              {testimonials[currentIndex].text}
            </p>
            <h3
              style={{ marginTop: "10px", fontWeight: "normal", color: "#555" }}
            >
              {testimonials[currentIndex].author}
            </h3>
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={nextTestimonial}
            style={{ borderRadius: "50%", padding: "10px 15px" }}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
