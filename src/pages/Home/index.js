import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Modal from '../../components/Modal';

import avatar from '../../assets/avatar.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';
import close from '../../assets/close.svg';

import './styles.css';

function Home() {
  const [isModalVisible, setIsModalvisible] = useState(false);

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
                <Modal onClose={() => setIsModalvisible(false)}>
                  <div className="home-modal">
                    <div className="avatar-content">
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="side-content">
                      <div className="middle">
                        <div className="bio">
                          <h1>Juliano Reis</h1>
                          <h2>Front-end Developer</h2>
                          <strong>Idade</strong>
                          <span>28</span>
                          <strong>Tempo de empresa</strong>
                          <span>2</span>
                          <strong>Projetos que participou</strong>
                          <span>Ifood</span>
                        </div>
                        <div className="footer-modal">
                          <button type="button">
                            <img src={trash} alt="Trash" />
                          </button>
                          <Link to="/update">
                            <img src={edit} alt="Edit" />
                          </Link>
                        </div>
                      </div>
                      <div className="close-modal">
                        <button
                          type="button"
                          onClick={() => setIsModalvisible(false)}
                        >
                          <img src={close} alt="Close" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              ) : null}
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
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <Modal onClose={() => setIsModalvisible(false)}>
                  <div className="home-modal">
                    <div className="avatar-content">
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="side-content">
                      <div className="middle">
                        <div className="bio">
                          <h1>Juliano Reis</h1>
                          <h2>Front-end Developer</h2>
                          <strong>Idade</strong>
                          <span>28</span>
                          <strong>Tempo de empresa</strong>
                          <span>2</span>
                          <strong>Projetos que participou</strong>
                          <span>Ifood</span>
                        </div>
                        <div className="footer-modal">
                          <button type="button">
                            <img src={trash} alt="Trash" />
                          </button>
                          <Link to="/update">
                            <img src={edit} alt="Edit" />
                          </Link>
                        </div>
                      </div>
                      <div className="close-modal">
                        <button
                          type="button"
                          onClick={() => setIsModalvisible(false)}
                        >
                          <img src={close} alt="Close" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              ) : null}
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
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <Modal onClose={() => setIsModalvisible(false)}>
                  <div className="home-modal">
                    <div className="avatar-content">
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="side-content">
                      <div className="middle">
                        <div className="bio">
                          <h1>Juliano Reis</h1>
                          <h2>Front-end Developer</h2>
                          <strong>Idade</strong>
                          <span>28</span>
                          <strong>Tempo de empresa</strong>
                          <span>2</span>
                          <strong>Projetos que participou</strong>
                          <span>Ifood</span>
                        </div>
                        <div className="footer-modal">
                          <button type="button">
                            <img src={trash} alt="Trash" />
                          </button>
                          <Link to="/update">
                            <img src={edit} alt="Edit" />
                          </Link>
                        </div>
                      </div>
                      <div className="close-modal">
                        <button
                          type="button"
                          onClick={() => setIsModalvisible(false)}
                        >
                          <img src={close} alt="Close" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              ) : null}
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
              <button
                className="modal-button"
                type="button"
                onClick={() => setIsModalvisible(true)}
              >
                <img src={avatar} alt="Avatar" className="avatar" />
              </button>
              {isModalVisible ? (
                <Modal onClose={() => setIsModalvisible(false)}>
                  <div className="home-modal">
                    <div className="avatar-content">
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <div className="side-content">
                      <div className="middle">
                        <div className="bio">
                          <h1>Juliano Reis</h1>
                          <h2>Front-end Developer</h2>
                          <strong>Idade</strong>
                          <span>28</span>
                          <strong>Tempo de empresa</strong>
                          <span>2</span>
                          <strong>Projetos que participou</strong>
                          <span>Ifood</span>
                        </div>
                        <div className="footer-modal">
                          <button type="button">
                            <img src={trash} alt="Trash" />
                          </button>
                          <Link to="/update">
                            <img src={edit} alt="Edit" />
                          </Link>
                        </div>
                      </div>
                      <div className="close-modal">
                        <button
                          type="button"
                          onClick={() => setIsModalvisible(false)}
                        >
                          <img src={close} alt="Close" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              ) : null}
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
