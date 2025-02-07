import { useState, useContext } from "react";
import "../Navbar/Navbar.css";
import { ThemeContext } from "../../ThemeContext";
// import { motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar font-main bg-light-background dark:bg-dark-background fixed w-full z-50">
      <h1 className="text-light-primary font-primary">Caleb</h1>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="mr-4 p-2 rounded-full bg-light-text dark:bg-dark-text"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <div className="button-container" onClick={toggleMenu}>
          <div className={`hamburger ${isActive ? "active" : ""}`}>
            <span className="bar bg-light-text dark:bg-dark-text"></span>
            <span className="bar bg-light-text dark:bg-dark-text"></span>
            <span className="bar bg-light-text dark:bg-dark-text"></span>
          </div>
        </div>
      </div>
      <ul
        className={`font-mono nav-menu ${
          isActive ? "active" : ""
        } bg-light-background dark:bg-dark-background`}
      >
        <li className="nav-item">
          <a
            href="#Top"
            className="nav-link current-link text-light-primary"
            onClick={handleLinkClick}
          >
            home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#About"
            className="nav-link text-light-text dark:text-dark-text"
            onClick={handleLinkClick}
          >
            about
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#form"
            className="nav-link text-light-text dark:text-dark-text"
            onClick={handleLinkClick}
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
