import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import { all_departments } from '../../items';

const Navigation = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">OnMart Superstore</Link>
      </div>
      <div className="navbar-menu">
        <ul>
          {all_departments.map((dept) => (
            <li>
              <Link to={"/department/"+dept.url}>{dept.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;