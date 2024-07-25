import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

const AboutSection = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="images/fresh-orange-drink.jpg"
              alt="Item 1"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4">
            <img src="images/variety-fruit-juices-black-background.jpg" alt="Item 2" className="img-fluid rounded mb-3" style={{height:'300Px'}}/>
            <img src="images/front-view-bananas-with-mango-orange-strawberries-lime-glass-orange-juice.jpg" alt="Item 3" className="img-fluid rounded" style={{height:'300Px'}} />
          </div>
          <div className="col-md-4">
            <div className="details-box p-3 border border-warning rounded">
              <h2>Fresh Ingredients, Endless Benefits</h2>
              <p>
                We use only the freshest, ripest fruits to create our delicious and nutritious juices. Our juices are packed with vitamins and antioxidants to help strengthen your body's defenses and promote healthy digestion.
              </p>
              <div className="benefits-list">
                <div className="benefit-item mb-2">
                  <i className="fas fa-apple-alt benefit-icon"></i>
                  <div className="benefit-text">
                    <h3>Natural Intake</h3>
                    <p>Our juices are made with natural ingredients for a wholesome intake.</p>
                  </div>
                </div>
                <div className="benefit-item mb-2">
                  <i className="fas fa-tint benefit-icon"></i>
                  <div className="benefit-text">
                    <h3>Hydration</h3>
                    <p>Keep yourself hydrated with a range of hydrating fruit juices.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-leaf benefit-icon"></i>
                  <div className="benefit-text">
                    <h3>Digestive Health</h3>
                    <p>Our juices promote better digestion and overall well-being.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
