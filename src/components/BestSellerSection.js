import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa"; // Importing react-icons for star icons

const BestSellerSection = () => {
  return (
    <section
      className="best-seller-section py-5 text-center"
      style={{
        backgroundColor: "#ff9800",
        backgroundImage: "url('images/ripe-tasty-strawberries-yellow-background.jpg')", // Add your background image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div className="container">
        <h2
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: "#ff9800",
            color: "#070707",
            fontWeight: "bold",
            padding: "15px",
            fontSize: "2rem", // Increased font size
          }}
        >
          Best Seller
        </h2>
        <div className="row justify-content-center">
          {[
            { flavor: "Berry", price: 50, rating: 4.3, reviews: 100 },
            { flavor: "Apple", price: 40, rating: 4.0, reviews: 80 },
            { flavor: "Orange", price: 45, rating: 4.7, reviews: 150 },
          ].map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="position-relative mb-4">
                <img
                  src={`images/litchi-removebg-preview.png`}
                  alt={product.flavor}
                  style={{
                    width: "200px", // Increased the size of the image
                    height: "200px",
                    objectFit: "contain",
                    position: "absolute",
                    top: "-50px", // Adjusted position to move it closer to the card
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: "1",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "180px", // Adjusted shadow position
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "25px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "50%",
                    zIndex: "0",
                  }}
                ></div>
              </div>
              <div className="card h-100 text-center border-0 shadow-lg" style={{ paddingTop: "100px" }}>
                <div className="card-body">
                  <h3 className="card-title" style={{ fontSize: "1.5rem" }}>
                    {product.flavor} - ₹{product.price}/-
                  </h3>
                  <div className="mb-2">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(product.rating) ? "#ffc107" : "#e4e5e9"} // Adjust rating dynamically
                      />
                    ))}
                    <span style={{ marginLeft: "8px", fontSize: "1.2rem" }}>({product.reviews} reviews)</span>
                  </div>
                  <button
                    className="btn btn-success"
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "12px",
                      cursor: "pointer",
                      borderRadius: "25px",
                      marginTop: "10px",
                      fontSize: "1.2rem", // Increased font size
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
