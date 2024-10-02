import { useState } from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav className="navbar font-main">
      <div className="button-container" onClick={toggleMenu}>
        <div className={`hamburger ${isActive ? 'active' : ''}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="index.html" className="nav-link current-link">home</a>
        </li>
        <li className="nav-item">
          <a href="src/pages/about.html" className="nav-link">about</a>
        </li>
        <li className="nav-item">
          <a href="src/pages/contact.html" className="nav-link">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar