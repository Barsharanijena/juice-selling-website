import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          document.querySelectorAll(".navbar-nav a").forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${section.id}`
            );
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#fcfcfc', padding: '5px 10px', color: 'rgb(0, 0, 0)', height: '50px' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src="images/1006.jpg" alt="Sky Mountain" width="30" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
            <li className="nav-item" style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#home" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', padding: '20px' }}>Home</a>
            </li>
            <li className="nav-item" style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#shop" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', padding: '20px' }}>Shop</a>
            </li>
            <li className="nav-item" style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#about" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', padding: '20px' }}>About</a>
            </li>
            <li className="nav-item" style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#contact" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none', padding: '20px' }}>Contact Us</a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="#cart" className="btn btn-outline-secondary me-2">
              <img src="icons/add-to-cart.jpg" alt="Cart" width="24" height="24" />
            </a>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
