import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

const ProductSection = () => {
  return (
    <section
      id="shop"
      className="product-section py-5"
      style={{
        backgroundColor: "#FCCB68",
        backgroundImage: "url('images/extreme-close-up-orange-fruit.jpg')",
        padding: "20px",
        marginTop: "20px",
        position: "relative",
      }}
    >
      <div className="container">
        <h2
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#FCCB68",
            color: "#333",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Our Products
        </h2>
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px",
            border: "2px solid white",
            borderRadius: "5px",
          }}
        >
          See our products &gt;
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "90px", paddingTop:"30px" }} 
        >
          {["Mango", "Litchi", "Apple", "Guava"].map((flavor, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="position-relative mb-4">
                <img
                  src={`images/litchi-removebg-preview.png`} 
                  alt={flavor}
                  style={{
                    width: "150px", 
                    height: "150px",
                    objectFit: "contain",
                    position: "absolute",
                    top: "-65px", 
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: "1",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "130px", 
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "50%",
                    zIndex: "0",
                  }}
                ></div>
              </div>
              <div className="card h-100 text-center border-0 shadow-lg" style={{ paddingTop: "75px" }}>
                <div className="card-body">
                  <h3 className="card-title">{flavor}</h3>
                  <div className="mb-2">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        color={i < (index + 3) ? "#ffc107" : "#e4e5e9"} 
                      />
                    ))}
                    <span style={{ marginLeft: "8px" }}>({(index + 3) * 20} reviews)</span>
                  </div>
                  <p className="card-text">₹{index * 10 + 20}/-</p>
                  <button
                    className="btn btn-success"
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "25px",
                      marginTop: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            className="btn btn-warning"
            style={{
              backgroundColor: "#ff9800",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "25px",
              fontSize: "16px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
