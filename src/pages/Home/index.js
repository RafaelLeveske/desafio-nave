import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import WarningDeleteModal from '../../components/WarningDeleteModal';

import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function Home() {
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
        <div className="home-top-content">
          <h2 className="home-top-content-h2">Navers</h2>
          <Link className="home-top-content-a" to="/new">
            <button className="home-top-content-button" type="button">
              Adicionar Naver
            </button>
          </Link>
        </div>
        <section className="home-middle-content">
          <ul className="home-naver-profile">
            {navers.map(naver => {
              return (
                <li key={naver.id} className="home-naver-profile-li">
                  <Link
                    to={`/profile/${naver.id}`}
                    className="home-naver-profile-li-a"
                  >
                    <img
                      src={naver.url}
                      alt="Avatar"
                      className="home-naver-profile-li-a-img"
                    />
                  </Link>
                  <strong className="home-naver-profile-li-strong">
                    {naver.name}
                  </strong>
                  <span className="home-naver-profile-li-span">
                    {naver.job_role}
                  </span>
                  <div className="home-icons">
                    <button
                      type="button"
                      className="home-icons-button"
                      onClick={() => handleDeleteNaver(naver.id)}
                    >
                      <img
                        src={trash}
                        alt="Trash"
                        className="home-icons-button-img"
                      />
                    </button>

                    <Link to={`/update/${naver.id}`} className="home-icons-a">
                      <img src={edit} alt="Edit" className="home-icons-a-img" />
                    </Link>
                  </div>
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
