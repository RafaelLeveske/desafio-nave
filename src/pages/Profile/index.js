import React, { useCallback, useState, useEffect } from 'react';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import WarningDeleteModal from '../../components/WarningDeleteModal';

import close from '../../assets/close.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function ProfileModal({ id = 'profile-modal' }) {
  const [isDeleteModalVisible, setIsDeleteModalvisible] = useState(false);
  const [navers, setNavers] = useState([]);
  const [
    isWarningDeleteModalVisible,
    setIsWarningDeleteModalvisible,
  ] = useState(false);

  const { params } = useRouteMatch();

  const history = useHistory();

  const token = localStorage.getItem('@Navedex:token');

  useEffect(() => {
    api
      .get(`navers/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setNavers(response.data);
      });
  }, [params.id, token]);

  async function handleDeleteNaver(naverId) {
    try {
      await api
        .delete(`navers/${naverId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(setIsWarningDeleteModalvisible(true));
      history.push('/home');
    } catch (err) {
      alert('Erro ao deletar o Naver, tente novamente');
    }
  }

  const handlePushToHome = useCallback(
    e => {
      if (e.target.id === id) history.push('/home');
    },
    [history, id],
  );

  return (
    <div id={id} className="profile-modal" onClick={handlePushToHome}>
      <div className="profile-modal-container">
        {navers && (
          <div className="home-modal">
            <div className="avatar-content">
              <img src={navers.url} alt="Avatar" />
            </div>
            <div className="side-content">
              <div className="middle">
                <div className="bio">
                  <h1>{navers.name}</h1>
                  <h2>{navers.job_role}</h2>
                  <strong>Idade</strong>
                  <span>{navers.birthdate}</span>
                  <strong>Tempo de empresa</strong>
                  <span>{navers.admission_date}</span>
                  <strong>Projetos que participou</strong>
                  <span>{navers.project}</span>
                </div>
                <div className="footer-modal">
                  <button
                    type="button"
                    className="trash"
                    onClick={() => setIsDeleteModalvisible(true)}
                  >
                    <img src={trash} alt="Trash" />
                  </button>
                  <Link to={`/update/${navers.id}`}>
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
                        handleDeleteNaver(navers.id) &&
                        setIsDeleteModalvisible(false)
                      }
                    >
                      Excluir
                    </button>
                  </ConfirmDeleteModal>
                ) : null}
                {isWarningDeleteModalVisible ? (
                  <WarningDeleteModal
                    onClose={() => setIsWarningDeleteModalvisible(false)}
                  />
                ) : null}
              </div>
              <div className="close-modal">
                <Link to="/home">
                  <img src={close} alt="Close" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileModal;
