import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header({ toggleMenu }) {
  return (
    <header className="header">
      <div className="left">
        <i className="fas fa-bars" onClick={toggleMenu}></i> {/* Menu bar icon */}
        <i className="fas fa-briefcase"></i> Asset Management System
      </div>
      <div className="right">
        <span className="help">
          <i className="fas fa-question-circle"></i>
        </span>
        <span className="user">
          <i className="fas fa-user"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
