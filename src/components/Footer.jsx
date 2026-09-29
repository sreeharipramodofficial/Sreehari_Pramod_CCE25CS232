import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>

      {/* About */}

      <div className="footer-about">

        <h2>
          Sreehari Pramod
        </h2>

        <p>
          Computer Science Engineering student interested in
          software development and building useful digital
          solutions.
        </p>

      </div>


      {/* Quick Links */}

      <div className="footer-links">

        <h3>
          Quick Links
        </h3>

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>


      {/* Contact */}

      <div className="footer-contact">

        <h3>
          Contact
        </h3>

        <a href="tel:+919746032772">
          +91 9746032772
        </a>

        <a
          href="https://linkedin.com/in/sreehari-pramod-6a1798391"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>


      {/* Copyright */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sreehari Pramod. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;