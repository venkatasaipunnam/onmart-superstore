import React, { useState } from 'react';
import './Tracking.css'

const Tracking = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, name: 'Order Placed' },
    { id: 2, name: 'Order Processing' },
    { id: 3, name: 'Order Shipped' },
    { id: 4, name: 'Order in Transit' },
    { id: 5, name: 'Order Delivered' },
  ];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length ? prevStep + 1 : prevStep));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="delivery-tracking-page">
      <h2>Delivery Tracking</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step ${currentStep >= step.id ? 'active' : ''}`}
          >
            <div className="step-circle">{step.id}</div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>
      <div className="actions">
        <button onClick={handlePreviousStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={handleNextStep} disabled={currentStep === steps.length}>
          Next
        </button>
      </div>
      <div className="map-container">
        {/* Render a map or location tracking component here */}
        <p>Map or location tracking component goes here</p>
      </div>
    </div>
  );
};

export default Tracking;