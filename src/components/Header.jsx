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
          aria-label="Toggle navigation menu"
        >
          <img src="/icon-hamburger.svg" alt="" />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#" role="presentation" tabindex="-1">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" role="presentation" tabindex="-1">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" role="presentation" tabindex="-1">
              Projects
            </a>
          </li>
          <li className="nav-item contact">
            <a href="#" role="presentation" tabindex="-1">
              Contact
            </a>
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
