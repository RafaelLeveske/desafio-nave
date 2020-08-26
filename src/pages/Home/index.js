import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import WarningDeleteModal from '../../components/WarningDeleteModal';

import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function Home() {
  const [isDeleteModalVisible, setIsDeleteModalvisible] = useState(false);
  const [navers, setNavers] = useState([]);
  const [
    isWarningDeleteModalVisible,
    setIsWarningDeleteModalvisible,
  ] = useState(false);

  const token = localStorage.getItem('@Navedex:token');

  useEffect(() => {
    api
      .get('navers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setNavers(response.data);
      });
  }, [token]);

  async function handleDeleteNaver(id) {
    try {
      await api.delete(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNavers(navers.filter(naver => naver.id !== id));
      setIsWarningDeleteModalvisible(true);
    } catch (err) {
      alert('Erro ao deletar o Naver, tente novamente');
    }
  }

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
            {navers.map(naver => {
              return (
                <li key={naver.id}>
                  <Link to={`/profile/${naver.id}`}>
                    <img src={naver.url} alt="Avatar" className="avatar" />
                  </Link>
                  <strong>{naver.name}</strong>
                  <span>{naver.job_role}</span>
                  <div className="icons">
                    <button
                      type="button"
                      onClick={() => setIsDeleteModalvisible(true)}
                    >
                      <img src={trash} alt="Trash" />
                    </button>

                    <Link to={`/update/${naver.id}`}>
                      <img src={edit} alt="Edit" />
                    </Link>
                  </div>
                  {isDeleteModalVisible ? (
                    <ConfirmDeleteModal
                      onClose={() => setIsDeleteModalvisible(false)}
                    >
                      <button
                        className="close-modal-cancel"
                        type="button"
                        onClick={() => setIsDeleteModalvisible(false)}
                      >
                        Cancelar
                      </button>
                      <button
                        className="close-modal-delete"
                        type="button"
                        onClick={() =>
                          handleDeleteNaver(naver.id) &&
                          setIsDeleteModalvisible(false)
                        }
                      >
                        Excluir
                      </button>
                    </ConfirmDeleteModal>
                  ) : null}
                </li>
              );
            })}
            {isWarningDeleteModalVisible ? (
              <WarningDeleteModal
                onClose={() => setIsWarningDeleteModalvisible(false)}
              />
            ) : null}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
