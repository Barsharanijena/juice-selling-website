import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      className="header py-5"
      style={{
        backgroundColor: '#f5f4f0',
        textAlign: 'left',
        padding: '20px',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Sip, <span style={{ color: '#ff9800' }}>Savor</span>, Repeat
            </h1>
            <p>Your journey to beverage perfection starts here</p>
            <button className="btn btn-warning" style={{ backgroundColor: '#ff9800', border: 'none', color: 'white' }}>Order Now</button>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <div
              className="order-section d-flex align-items-center"
              style={{
                position: 'relative',
              }}
            >
              <div
                className="discount"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ff9800',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  zIndex: 3,
                }}
              >
                <span style={{ fontSize: '12px' }}>20% off</span>
              </div>
              <img
                src="images/litchi-removebg-preview.png"
                alt="Tilted Bottle"
                className="bottle-image"
                style={{
                  maxHeight: "150px",
                  position: 'absolute',
                  zIndex: 1,
                  transform: 'rotate(-25deg)',
                  marginLeft: '45px',
                  marginTop: '50px',
                }}
              />
              <img
                src="images/litchi-removebg-preview.png"
                alt="Bottle"
                className="bottle-image"
                style={{
                  maxHeight: "200px",
                  position: 'relative',
                  zIndex: 2,
                  marginLeft: '60px',
                }}
              />
              <div
                className="delivery-box"
                style={{
                  backgroundColor: '#ff9800',
                  padding: '10px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  position: 'absolute',
                  bottom: '-20px',
                  left: '0',
                  width: '200px',
                  zIndex: 0,
                }}
              >
                <p style={{ margin: '5px 0' }}>
                  <i className="fas fa-shipping-fast"></i> Fast Delivery
                </p>
                <p style={{ margin: '5px 0' }}>
                  <i className="fas fa-home"></i> Inhouse Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
