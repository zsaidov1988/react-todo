import "./Header.css";

import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navbar navbar">
          <a className="navbar__logo-link" href="/">
            <img src={logo} alt="Logo" width="50" height="50" />
          </a>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link navbar__link--active" href="/">Home</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/">To do list</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/">Contact</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/">About us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;