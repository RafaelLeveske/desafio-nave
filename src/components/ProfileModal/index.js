import React from 'react';

import { Link } from 'react-router-dom';

import avatar from '../../assets/avatar.svg';
import close from '../../assets/close.svg';
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

import './styles.css';

function ProfileModal({ id = 'profile-modal', onClose = () => {} }) {
  const handleOutsideClick = e => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="profile-modal" onClick={handleOutsideClick}>
      <div className="profile-modal-container">
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
              <button type="button" onClick={onClose}>
                <img src={close} alt="Close" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
