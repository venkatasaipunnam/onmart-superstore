import AppLogo from '../images/OnMart.jpg';
import './Header.css';

function Header() {
  return (
    <header className="header-component">
      <img src={AppLogo} alt="OnMart Superstore" />
      <h1>OnMart Superstore</h1>
    </header>
  );
}

export default Header;
