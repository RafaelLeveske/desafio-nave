import React from 'react';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.svg';

import './styles.css';

function Header() {
  const history = useHistory();

  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
    history.push('/');
  }
  return (
    <header className="header-container">
      <div className="side-content">
        <img src={logo} alt="nave.rs" />
        <strong>nave.rs</strong>
      </div>

      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </header>
  );
}

export default Header;
