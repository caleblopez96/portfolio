// import { useState } from 'react';
// import '../Navbar/Navbar.css';

// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive((prev) => !prev);
//   };

//   return (
//     <nav className="navbar font-main">
//       <h1 className='text-red-700 font-mono'>Caleb</h1>
//       <div className="button-container" onClick={toggleMenu}>
//         <div className={`hamburger ${isActive ? 'active' : ''}`}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </div>
//       <ul className={`font-mono nav-menu ${isActive ? 'active' : ''}`}>
//         <li className="nav-item">
//           <a href="index.html" className="nav-link current-link">home</a>
//         </li>
//         <li className="nav-item">
//           <a href="src/pages/about.html" className="nav-link">about</a>
//         </li>
//         <li className="nav-item">
//           <a href="src/pages/contact.html" className="nav-link">contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar

import { useState, useContext } from 'react';
import '../Navbar/Navbar.css';
import { ThemeContext } from '../../ThemeContext';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav className="navbar font-main bg-light-background dark:bg-dark-background">
      <h1 className='text-light-primary font-mono'>Caleb</h1>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="mr-4 p-2 rounded-full bg-light-text dark:bg-dark-text text-light-background dark:text-dark-background"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div className="button-container" onClick={toggleMenu}>
          <div className={`hamburger ${isActive ? 'active' : ''}`}>
            <span className="bar bg-light-text dark:bg-dark-text"></span>
            <span className="bar bg-light-text dark:bg-dark-text"></span>
            <span className="bar bg-light-text dark:bg-dark-text"></span>
          </div>
        </div>
      </div>
      <ul className={`font-mono nav-menu ${isActive ? 'active' : ''} bg-light-background dark:bg-dark-background`}>
        <li className="nav-item">
          <a href="index.html" className="nav-link current-link text-light-primary">home</a>
        </li>
        <li className="nav-item">
          <a href="src/pages/about.html" className="nav-link text-light-text dark:text-dark-text">about</a>
        </li>
        <li className="nav-item">
          <a href="src/pages/contact.html" className="nav-link text-light-text dark:text-dark-text">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar