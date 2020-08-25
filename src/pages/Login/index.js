import React, { useState, useCallback, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { id, signIn } = useContext(AuthContext);

  console.log(id);

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

  // async function handleLogin(e) {
  //   e.preventDefault();

  //   try {
  //     const response = await api.post('users/login', { email, password });

  //     localStorage.setItem('email', response.data.email);
  //     localStorage.setItem('password', response.data.password);

  //     console.log(response.data);

  //     history.push('/home');
  //   } catch (err) {
  //     alert('Falha no login, tente novamente.');
  //   }
  // }

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
