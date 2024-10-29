import React, { useState, useEffect } from 'react';
import Navigation from './components/nav/Navigation.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { departments } from './items/index.js';
import './App.css';
import Header from './components/Header.js';
import Login from './components/login/Login.js';
import ProductDetails from './components/ProductDetails.js';
import Signup from './components/login/Signup.js';
import Checkout from './components/checkout/Checkout.js';
import UserProfile from './components/profile/UserProfile.js';
import Products from './components/products/Products.js';
import TechnicalServiceRequest from './components/requests/TechnicalServiceRequest.js';
import OrdersHistory from './components/orders/OrdersHistory.js';
import Tracking from './components/tracking/Tracking.js';
import Cart from './components/orders/Cart.js';
import CreditCard from './components/cards/CreditCard.js';
import FeedbackForm from './components/feedback/FeedbackForm.js';

const Routers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [dept, setDept] = useState([]);

  useEffect(() => {
    setDept(departments)
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <Router>
      <div className="App">
        <Header />
        <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
            <Route path="/" element={<Home departments={dept} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/departments" element={<ProductDetails />} />
            <Route path="/department/*" element={<Home departments={dept} />} />
            
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path='/products' element={<Products />} />
            <Route path="/request-service" element={<TechnicalServiceRequest />} />
            <Route path="/orders" element={<OrdersHistory />} />

            <Route path="/order/track" element={<Tracking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/feedback" element={<FeedbackForm />} />

            
            <Route path="/profile/cards" element={<CreditCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routers;