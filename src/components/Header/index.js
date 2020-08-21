import React from 'react';

import logo from '../../assets/logo.svg';

import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div className="side-content">
        <img src={logo} alt="nave.rs" />
        <strong>nave.rs</strong>
      </div>

      <button type="button">Sair</button>
    </header>
  );
}

export default Header;
