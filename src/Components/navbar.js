import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <img src="/images/logo_DamianEisenring.png" alt="Logo" /> 
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'active' : ''}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/Informatik" onClick={toggleMenu}>Informatik</Link></li>
        <li><Link to="/Schwingen" onClick={toggleMenu}>Schwingen</Link></li>
        <li><Link to="/Kontakt" onClick={toggleMenu}>Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;