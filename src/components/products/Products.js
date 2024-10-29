import React, { useState } from 'react';
import './Products.css'
import electronics from '../../images/departements/electronics.png';

const Products = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="product-view-page">
      <h2>Laptop</h2>
      <div style={{ alignContent:'center'}}>
        <img src={electronics} alt="Description of the image" />
        <p></p>
        <button onClick = {() => alert("adding to Cart")} style={{ alignContent:'center', color:'white', backgroundColor: 'Blue'}}>Add To Cart</button>
      </div>
      <div className="product-details">
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSection('overview')}>
              <h3>Overview</h3>
              <span className={`arrow ${activeSection === 'overview' ? 'open' : ''}`}>&#9660;</span>
            </div>
            <div className={`accordion-content ${activeSection === 'overview' ? 'open' : ''}`}>
              <p>Product overview description...</p>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSection('specifications')}>
              <h3>Specifications</h3>
              <span className={`arrow ${activeSection === 'specifications' ? 'open' : ''}`}>&#9660;</span>
            </div>
            <div className={`accordion-content ${activeSection === 'specifications' ? 'open' : ''}`}>
              <ul>
                <li>Specification 1</li>
                <li>Specification 2</li>
                <li>Specification 3</li>
              </ul>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSection('reviews')}>
              <h3>Customer Reviews</h3>
              <span className={`arrow ${activeSection === 'reviews' ? 'open' : ''}`}>&#9660;</span>
            </div>
            <div className={`accordion-content ${activeSection === 'reviews' ? 'open' : ''}`}>
              <div className="review">
                <h4>Review Title</h4>
                <p>Review content...</p>
              </div>
              {/* More reviews */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;