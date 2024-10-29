import React from 'react';
import './Order.css'
const OrdersHistory = () => {
  const orders = [
    {
      id: 1,
      date: '2023-05-01',
      total: 99.99,
      items: [
        { name: 'Product 1', quantity: 2, price: 24.99 },
        { name: 'Product 2', quantity: 1, price: 49.99 },
      ],
    },
    {
      id: 2,
      date: '2023-04-15',
      total: 59.99,
      items: [{ name: 'Product 3', quantity: 1, price: 59.99 }],
    },
    // ... more orders
  ];

  return (
    <div className="order-history-page">
      <h2>Order History</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <div className="order-header">
              <span>Order ID: {order.id}</span>
              <span>Date: {order.date}</span>
              <span>Total: ${order.total.toFixed(2)}</span>
            </div>
            <div className="order-details">
              <h4>Items</h4>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} (Quantity: {item.quantity}) - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersHistory;