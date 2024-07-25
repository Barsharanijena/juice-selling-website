import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BenefitsSection = () => {
  return (
    <section className="benefits-section py-5" style={{ padding: '20px', position: 'relative' }}>
      <div className="container">
        <h2 className="position-absolute" style={{ top: '20px', left: '20px', margin: 0, fontWeight: 'bold' }}>
          The Benefits of Juices from our Shop
        </h2>
        <div className="row mt-5">
          {[
            {
              imgSrc: "icons/Digestive Health.jpg",
              title: "Digestive Health",
              text: "Our juices help improve your digestive system with natural enzymes and probiotics."
            },
            {
              imgSrc: "/icons/Immune-Support.jpg",
              title: "Immune Support",
              text: "Packed with vitamins and antioxidants to strengthen your immune system."
            },
            {
              imgSrc: "/icons/energy-boost.jpg",
              title: "Energy Boost",
              text: "Natural sugars and nutrients for a healthy energy boost to keep you active."
            },
            {
              imgSrc: "/icons/antioxidant-power.jpg",
              title: "Antioxidant Power",
              text: "Loaded with antioxidants to help fight free radicals and reduce oxidative stress."
            }
          ].map((benefit, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100">
                <img src={benefit.imgSrc} className="card-img-top" alt={benefit.title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{benefit.title}</h3>
                  <p className="card-text flex-grow-1">{benefit.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
