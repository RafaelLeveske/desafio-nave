import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div className="side-content">
        <img src={logo} alt="nave.rs" />
        <strong>nave.rs</strong>
      </div>
      <Link to="/">
        <button type="button">Sair</button>
      </Link>
    </header>
  );
}

export default Header;
