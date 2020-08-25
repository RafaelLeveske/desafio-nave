import React, { useState, useCallback } from 'react';

import { useAuth } from '../../hooks/AuthContext';

import logo from '../../assets/logo.svg';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      try {
        signIn({
          email,
          password,
        });
      } catch (err) {
        alert('Erro ao cadastrar Naver, tente novamente.');
      }
    },
    [email, password, signIn],
  );

  return (
    <div className="login-page container">
      <fieldset>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="header-form">
            <img src={logo} alt="Nave" />
            <strong>nave.rs</strong>
          </div>
          <div className="input-form">
            <span>E-mail</span>
            <input
              type="email"
              placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
            />
            <span>Senha</span>
            <input
              type="password"
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Entrar</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
