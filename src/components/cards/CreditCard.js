import React, { useState } from 'react';
import './Cards.css'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardCsv, setCardCsv] = useState('');

  const handleCardNumberChange = (e) => {
    const formattedValue = e.target.value
      .replace(/\D/g, '') // Remove non-digit characters
      .replace(/(\d{4})(?=\d)/g, '$1 ') // Add space after every 4 digits
      .slice(0, 19); // Limit to 19 characters (16 digits + 3 spaces)

    setCardNumber(formattedValue);
  };

  const handleCardCsvChange = (e) => {
    const formattedValue = e.target.value.replace(/\D/g, '').slice(0, 3); // Allow only 3 digits
    setCardCsv(formattedValue);
  };

  return (
    <div className="credit-card-input">
      <div className="card">
        <div className="card-header">
          <div className="card-type">Card Type</div>
        </div>
        <div className="card-body">
          <div className="card-number">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19}
            />
          </div>
          <div className="card-details">
            <div className="card-holder">
              <input type="text" placeholder="Card Holder" />
            </div>
            <div className="card-expiry">
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="card-csv">
              <input
                type="text"
                placeholder="CSV"
                value={cardCsv}
                onChange={handleCardCsvChange}
                maxLength={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;