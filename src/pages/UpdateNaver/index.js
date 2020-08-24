import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import WarningUpdateModal from '../../components/WarningUpdateModal';

import arrowLeft from '../../assets/arrow-left.svg';

import './styles.css';

function UpdateNaver() {
  const [isModalVisible, setIsModalvisible] = useState(false);

  return (
    <div className="new-naver-page container">
      <Header />
      <form className="new-naver-container">
        <div className="top-content">
          <Link to="/home">
            <img src={arrowLeft} alt="Arrow Left" />
          </Link>
          <h2>Editar Naver</h2>
        </div>
        <div className="middle-content">
          <div className="first-column">
            <ul>
              <li>
                <span>Nome</span>
                <input type="text" placeholder="Nome" />

                <span>Idade</span>
                <input type="text" placeholder="Idade" />

                <span>Projetos que participou</span>
                <input type="text" placeholder="Projetos que participou" />
              </li>
            </ul>
          </div>

          <div className="second-column">
            <ul>
              <li>
                <span>Cargo</span>
                <input type="text" placeholder="Cargo" />

                <span>Tempo de empresa</span>
                <input type="text" placeholder="Tempo de empresa" />

                <span>URL da foto do Naver</span>
                <input type="text" placeholder="URL da foto do Naver" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <button type="button" onClick={() => setIsModalvisible(true)}>
            Salvar
          </button>
          {isModalVisible ? (
            <WarningUpdateModal onClose={() => setIsModalvisible(false)}>
              <div className="text-content">
                <strong>Naver atualizado</strong>
                <span>Naver atualizado com sucesso!</span>
              </div>
            </WarningUpdateModal>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default UpdateNaver;
