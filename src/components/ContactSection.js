import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="contact-and-offer py-5"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1 style={{ color: "#e68a00", textAlign: "left" }}>Contact</h1>
            <h2 style={{ color: "#020202", textAlign: "left" }}>
              Get In Touch
            </h2>
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label
                    htmlFor="formFirstName"
                    className="form-label"
                    style={{ textAlign: "left" }}
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formFirstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="formLastName"
                    className="form-label"
                    style={{ textAlign: "left" }}
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formLastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label
                    htmlFor="formEmail"
                    className="form-label"
                    style={{ textAlign: "left" }}
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formEmail"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="formPhoneNumber"
                    className="form-label"
                    style={{ textAlign: "left" }}
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="formPhoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="formMessage"
                  className="form-label"
                  style={{ textAlign: "left" }}
                >
                  Message*
                </label>
                <textarea
                  className="form-control"
                  id="formMessage"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning"
                style={{
                  backgroundColor: "#ff9800",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "25px",
                  marginTop: "20px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center">
            <div
              className="offer-box p-3 border border-warning"
              style={{
                backgroundImage: "url('images/high-angle-view-two-lollipops-orange-surface.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                textAlign: "center",
                width: "220px",
                height: "220px",
                marginTop: "140px",
                padding: "20px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3>Get 20% Off</h3>
              <p>Order now and enjoy a 20% discount on all products!</p>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              style={{
                backgroundColor: "#ff9800",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "25px",
                marginTop: "100px",
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
