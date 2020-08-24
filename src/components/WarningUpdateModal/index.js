import React from 'react';

import close from '../../assets/close.svg';

import './styles.css';

function WarningUpdateModal({
  id = 'warning-create-modal',
  onClose = () => {},
}) {
  const handleOutsideClick = e => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="warning-create-modal" onClick={handleOutsideClick}>
      <div className="warning-create-modal-container">
        <div className="text-content">
          <strong>Naver atualizado</strong>
          <span>Naver atualizado com sucesso!</span>
        </div>
        <div className="close-modal">
          <button
            className="close-modal-button"
            type="button"
            onClick={onClose}
          >
            <img src={close} alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarningUpdateModal;
