import React, { useCallback, useState, useEffect } from 'react';

import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import close from '../../assets/close.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function ProfileModal() {
  const [navers, setNavers] = useState([]);

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

  const handlePushToHome = useCallback(() => {
    history.push('/home');
  }, [history]);

  return (
    <div className="profile-modal" onClick={handlePushToHome}>
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
                  <button type="button">
                    <img src={trash} alt="Trash" />
                  </button>
                  <Link to={`/update/${navers.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                </div>
              </div>
              <div className="close-modal">
                <button type="button" onClick={handlePushToHome}>
                  <img src={close} alt="Close" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileModal;
