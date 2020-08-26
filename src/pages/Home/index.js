import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import ProfileModal from '../../components/ProfileModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';

import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function Home() {
  const [isModalVisible, setIsModalvisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalvisible] = useState(false);
  const [navers, setNavers] = useState([]);

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

  // async function handleDeleteNaver(id) {
  //   try {
  //     await api.delete(`navers/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     setNavers(navers.filter(naver => naver.id !== id));
  //   } catch (err) {
  //     alert('Erro ao deletar o Naver, tente novamente');
  //   }
  // }

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
                  <button
                    className="modal-button"
                    type="button"
                    onClick={() => setIsModalvisible(true)}
                  >
                    <img src={naver.url} alt="Avatar" className="avatar" />
                  </button>
                  {isModalVisible ? (
                    <ProfileModal onClose={() => setIsModalvisible(false)} />
                  ) : null}
                  <strong>{naver.name}</strong>
                  <span>{naver.job_role}</span>
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
              );
            })}
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
