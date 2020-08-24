import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ProfileModal from '../../components/ProfileModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';

import avatar from '../../assets/avatar.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function Home() {
  const [isModalVisible, setIsModalvisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalvisible] = useState(false);

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
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <ProfileModal onClose={() => setIsModalvisible(false)} />
              ) : null}
              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button
                  type="button"
                  onClick={() => setIsDeleteModalvisible(true)}
                >
                  <img src={trash} alt="Trash" />
                </button>

                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>

            <li>
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <ProfileModal onClose={() => setIsModalvisible(false)} />
              ) : null}
              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button
                  type="button"
                  onClick={() => setIsDeleteModalvisible(true)}
                >
                  <img src={trash} alt="Trash" />
                </button>

                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>

            <li>
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <ProfileModal onClose={() => setIsModalvisible(false)} />
              ) : null}
              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button
                  type="button"
                  onClick={() => setIsDeleteModalvisible(true)}
                >
                  <img src={trash} alt="Trash" />
                </button>

                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>

            <li>
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <ProfileModal onClose={() => setIsModalvisible(false)} />
              ) : null}
              <strong>Juliano Reis</strong>
              <span>Front-end Developer</span>
              <div className="icons">
                <button
                  type="button"
                  onClick={() => setIsDeleteModalvisible(true)}
                >
                  <img src={trash} alt="Trash" />
                </button>

                <Link to="/update">
                  <img src={edit} alt="Edit" />
                </Link>
              </div>
            </li>
          </ul>
          {isDeleteModalVisible ? (
            <ConfirmDeleteModal
              onClose={() => setIsDeleteModalvisible(false)}
            />
          ) : null}
        </section>
      </div>
    </div>
  );
}

export default Home;
