import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import avatar from '../../assets/avatar.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function Home() {
  return (
    <div className="home-page container">
      <Header />
      <div className="home-container">
        <div className="top-content">
          <h2>Navers</h2>
          <Link to="/new">
            <button type="button">Adicionar Naver</button>
          </Link>
        </div>
        <section className="middle-content">
          <ul className="naver-profile">
            <li>
              <Link to="/update">
                <img src={avatar} alt="Avatar" className="avatar" />
              </Link>

              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button type="button">
                  <img src={trash} alt="Trash" />
                </button>
                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>

            <li>
              <Link to="/teste">
                <img src={avatar} alt="Avatar" className="avatar" />
              </Link>

              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button type="button">
                  <img src={trash} alt="Trash" />
                </button>
                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>

            <li>
              <Link to="/teste">
                <img src={avatar} alt="Avatar" className="avatar" />
              </Link>

              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button type="button">
                  <img src={trash} alt="Trash" />
                </button>
                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>

            <li>
              <Link to="/teste">
                <img src={avatar} alt="Avatar" className="avatar" />
              </Link>

              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button type="button">
                  <img src={trash} alt="Trash" />
                </button>
                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
