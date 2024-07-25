import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import BestSellerSection from "./components/BestSellerSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductSection />
      <AboutSection />
      <BestSellerSection />
      <BenefitsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
