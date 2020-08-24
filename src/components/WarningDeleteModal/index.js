import React from 'react';

import close from '../../assets/close.svg';

import './styles.css';

function WarningDeleteModal({
  id = 'warning-delete-modal',
  onClose = () => {},
}) {
  const handleOutsideClick = e => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="warning-delete-modal" onClick={handleOutsideClick}>
      <div className="warning-delete-modal-container">
        <div className="text-content-delete">
          <strong className="delete-strong">Naver excluído</strong>
          <span className="delete-span">Naver excluído com sucesso!</span>
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

export default WarningDeleteModal;
