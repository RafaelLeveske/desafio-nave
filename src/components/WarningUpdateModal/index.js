import React from 'react';

import close from '../../assets/close.svg';

import './styles.css';

function WarningUpdateModal({
  id = 'warning-update-modal',
  onClose = () => {},
}) {
  const handleOutsideClick = e => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="warning-update-modal" onClick={handleOutsideClick}>
      <div className="warning-update-modal-container">
        <div className="text-content-update">
          <strong className="update-strong">Naver atualizado</strong>
          <span className="update-span">Naver atualizado com sucesso!</span>
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
