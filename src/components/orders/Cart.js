import React, { useState } from 'react';
import './Order.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 14.99, quantity: 3 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSaveForLater = (id) => {
    // Logic to save the item for later
    console.log(`Saved item ${id} for later`);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="item-actions">
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </label>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button onClick={() => handleSaveForLater(item.id)}>
                Save for Later
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>
          Total:{' '}
          $
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ).toFixed(2)}
        </p>
        <a href='cart/checkout'><button>Checkout</button></a>
      </div>
    </div>
  );
};

export default Cart;