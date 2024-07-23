import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="images/1006.jpg" alt="Sky Mountain" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="navbar-actions">
        <img src="icons/add-to-cart.jpg" alt="Cart" className="navbar-cart" />
        <button className="signin-button">Sign In</button>
      </div>
    </nav>
  );
};

const testimonials = [
  { text: "“Amazing taste and fast delivery. Highly recommend!”", author: "Shreya Roy" },
  { text: "“Exceptional service and quality. Will definitely order again!”", author: "Rahul Sharma" },
  { text: "“Fantastic experience! The products exceeded my expectations.”", author: "Anita Singh" }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <h2 className="section-title">What our clients are saying</h2>
      <div className="testimonial">
        <p>{testimonials[currentIndex].text}</p>
        <h3>{testimonials[currentIndex].author}</h3>
      </div>
      <div className="navigation-arrows">
        <button onClick={prevTestimonial}>&#10094;</button>
        <button onClick={nextTestimonial}>&#10095;</button>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="header">
        <h1>Sip, <span className="yellow-text">Savour</span>, Repeat</h1>
        <p>Your journey to beverage perfection starts here</p>
        <button className="order-now">Order Now</button>

        <div className="order-section">
          <div className="delivery-box">
            <p><i className="fas fa-shipping-fast"></i> Fast Delivery</p>
            <p><i className="fas fa-home"></i> Inhouse Delivery</p>
          </div>
          <img src="images/litchi-removebg-preview.png" alt="Bottle" className="bottle-image" />
          <div className="discount">20% off</div>
        </div>
      </header>

      <section className="product-section">
        <h2>Our Product</h2>
        <div className="product-list">
          {["Mango", "Litchi", "Apple", "Guava"].map((flavor, index) => (
            <div className="product-card" key={index}>
              <img src={`images/litchi-removebg-preview.png`} alt={flavor} />
              <h3>{flavor}</h3>
              <p>₹{index * 10 + 20}/-</p>
              <button>Order Now</button>
            </div>
            
          ))}
        </div>
      </section>
      <section className="grid-and-details">
        <div className="image-grid">
        <img src="images/fruits.png" alt="image" className="grid-and-details" />
        <img src="images/juice.png" alt="image" className="grid-and-details" />
        <img src="images/store.png" alt="image" className="grid-and-details" />
        </div>
        <div className="details-box">
          <h2>Fresh Ingredients, Endless Benefits</h2>
          <p>
            We use only the freshest, ripest fruits to create our delicious and
            nutritious juices. Our juices are packed with vitamins and
            antioxidants to help strengthen your body's defenses and promote
            healthy digestion. Enjoy a natural energy boost from our juices,
            perfect for starting your day right.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className="best-seller-section">
        <h2>Best Seller</h2>
        <div className="product-list">
          {[
            { flavor: "Berry", price: 50, rating: 4.3 },
            { flavor: "Apple", price: 40, rating: 4.0 },
            { flavor: "Orange", price: 45, rating: 4.7 },
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src={`images/litchi-removebg-preview.png`} alt={product.flavor} />
              <h3>{product.flavor} - ₹{product.price}/-</h3>
              <div className="star-rating">
                {"★".repeat(Math.floor(product.rating)) +
                  (product.rating % 1 !== 0 ? "★".substring(0, 1) : "")}
                {"☆".repeat(5 - Math.ceil(product.rating))}
              </div>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section">
        <h2>The Benefits of Juices from our Shop</h2>
        <div className="benefits-list">
          <div className="benefit-card">
            <img src="icons/Digestive Health.jpg" alt="Digestive Health" />
            <h3>Digestive Health</h3>
          </div>
          <div className="benefit-card">
            <img src="/icons/Immune-Support.jpg" alt="Immune Support" />
            <h3>Immune Support</h3>
          </div>
          <div className="benefit-card">
            <img src="/icons/energy-boost.jpg" alt="Energy Boost" />
            <h3>Energy Boost</h3>
          </div>
          <div className="benefit-card">
            <img src="/icons/antioxidant-power.jpg" alt="Antioxidant Power" />
            <h3>Antioxidant Power</h3>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <div className="contact-and-offer row mt-5">
        <div className="col-md-6">
          <section className="contact-section">
            <h1>Contact</h1>
            <h2>Get In Touch</h2>
            <form className="contact-form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Contact" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </div>
        <div className="col-md-6">
          <div className="offer-box p-3">
            <h3>Get 20% Off</h3>
            <p>Order now and enjoy a 20% discount on all products!</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-sections">
          <div className="footer-column">
            <h3>Sky Mountain</h3>
            <ul>
              <li><a href="#mango">Mango</a></li>
              <li><a href="#litchi">Litchi</a></li>
              <li><a href="#apple">Apple</a></li>
              <li><a href="#guava">Guava</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#mango">Mango</a></li>
              <li><a href="#litchi">Litchi</a></li>
              <li><a href="#apple">Apple</a></li>
              <li><a href="#guava">Guava</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Our Product</h3>
            <ul>
              <li><a href="#mango">Mango</a></li>
              <li><a href="#litchi">Litchi</a></li>
              <li><a href="#apple">Apple</a></li>
              <li><a href="#guava">Guava</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get in Touch</h3>
            <p>For inquiries, email us at info@skymountain.com or call us at (123) 456-7890.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Sky Mountain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
