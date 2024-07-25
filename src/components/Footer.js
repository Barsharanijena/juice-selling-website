import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer py-4"
      style={{
        backgroundColor: '#ff9800', 
        color: '#080808',
        padding: '20px',
        backgroundImage: "url('images/8848069.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row footer-sections" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div className="col-md-4 footer-column" style={{ flex: 2, margin: '0 10px' }}>
            <h3 style={{ color: '#3f3f3f' }}>Sky Mountain</h3>
            <p style={{ color: '#0a0a0a' }}>
              Sky Mountain is a premier juice-making company dedicated to bringing you the freshest and most delicious fruit juices.
            </p>
          </div>
          <div className="col-md-2 footer-column" style={{ flex: 1, margin: '0 10px' }}>
            <h3 style={{ color: '#3f3f3f' }}>Support</h3>
            <ul className="list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#mango" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Mango</a></li>
              <li><a href="#litchi" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Litchi</a></li>
              <li><a href="#apple" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Apple</a></li>
              <li><a href="#guava" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Guava</a></li>
            </ul>
          </div>
          <div className="col-md-2 footer-column" style={{ flex: 1, margin: '0 10px' }}>
            <h3 style={{ color: '#3f3f3f' }}>Our Product</h3>
            <ul className="list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#mango" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Mango</a></li>
              <li><a href="#litchi" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Litchi</a></li>
              <li><a href="#apple" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Apple</a></li>
              <li><a href="#guava" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Guava</a></li>
            </ul>
          </div>
          <div className="col-md-2 footer-column" style={{ flex: 1, margin: '0 10px' }}>
            <h3 style={{ color: '#3f3f3f' }}>Useful Links</h3>
            <ul className="list-unstyled" style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#home" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#shop" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Shop</a></li>
              <li><a href="#about" style={{ color: '#0a0a0a', textDecoration: 'none' }}>About</a></li>
              <li><a href="#contact" style={{ color: '#0a0a0a', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <div className="social-icons" style={{ marginTop: '10px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', color: '#ff9800', borderRadius: '50%', padding: '10px', margin: '0 5px' }}>
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', color: '#ff9800', borderRadius: '50%', padding: '10px', margin: '0 5px' }}>
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', color: '#ff9800', borderRadius: '50%', padding: '10px', margin: '0 5px' }}>
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', color: '#ff9800', borderRadius: '50%', padding: '10px', margin: '0 5px' }}>
              <FaTwitter />
            </a>
          </div>
          <p style={{ color: '#fff', textAlign: 'center' }}>&copy; 2024 Sky Mountain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;