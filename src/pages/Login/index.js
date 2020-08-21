import React from 'react';

import logo from '../../assets/logo.svg';

import './styles.css';

function Login() {
  return (
    <div className="home-page container">
      <fieldset>
        <form className="login-form" action="#">
          <div className="header-form">
            <img src={logo} alt="Nave" />
            <strong>nave.rs</strong>
          </div>
          <div className="input-form">
            <span>E-mail</span>
            <input type="email" placeholder="E-mail" />
            <span>Senha</span>
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
