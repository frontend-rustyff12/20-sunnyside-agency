export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img className="logo" src="/logo.svg" alt="Sunnyside company logo" />
        <nav>
          <ul className="footer-nav-links">
            <li>
              <a className="footer-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <ul className="footer-socials">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icon-facebook.svg" alt="Link to facebook" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icon-instagram.svg" alt="Link to instagram" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icon-twitter.svg" alt="Link to twitter" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icon-pinterest.svg" alt="Link to pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
