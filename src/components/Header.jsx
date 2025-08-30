import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Sunnyside company logo" />

        <button
          onClick={toggleMenu}
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        >
          <img src="/icon-hamburger.svg" alt="" />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Services</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item contact">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="header-title">
        <h1>We are creatives</h1>
        <img className="arrow" src="/icon-arrow-down.svg" alt="" />
      </div>
    </header>
  );
}
