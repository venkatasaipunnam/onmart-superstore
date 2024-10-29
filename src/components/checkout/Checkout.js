import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    shippingAddress: '',
    billingAddress: '',
    paymentMethod: '',
    // Add other form fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <h3>Shipping Address</h3>
            <div className="form-group">
              <label htmlFor="shippingAddress">Shipping Address:</label>
              <input
                type="text"
                id="shippingAddress"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Billing Address</h3>
            <div className="form-group">
              <label htmlFor="billingAddress">Billing Address:</label>
              <input
                type="text"
                id="billingAddress"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Payment Method</h3>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <input
                type="text"
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-steps">
        <div className={`step ${activeStep === 1 ? 'active' : ''}`}>
          <span>1</span>
          <p>Shipping Address</p>
        </div>
        <div className={`step ${activeStep === 2 ? 'active' : ''}`}>
          <span>2</span>
          <p>Billing Address</p>
        </div>
        <div className={`step ${activeStep === 3 ? 'active' : ''}`}>
          <span>3</span>
          <p>Payment Method</p>
        </div>
      </div>
      <div className="checkout-form">
        {renderStep()}
        <div className="checkout-actions">
          {activeStep > 1 && (
            <button onClick={handlePrevStep}>Previous</button>
          )}
          {activeStep < 3 && (
            <button onClick={handleNextStep}>Next</button>
          )}
          {activeStep === 3 && <a href='/order/track'><button type="submit">Place Order</button></a>}
        </div>
      </div>
    </div>
  );
};

export default Checkout;