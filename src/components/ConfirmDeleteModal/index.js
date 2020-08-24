import React, { useState } from 'react';

import WarningDeleteModal from '../WarningDeleteModal';

import './styles.css';

function ConfirmDeleteModal({
  id = 'confirm-delete-modal',
  onClose = () => {},
}) {
  const [isModalVisible, setIsModalvisible] = useState(false);

  const handleOutsideClick = e => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="confirm-delete-modal" onClick={handleOutsideClick}>
      <div className="confirm-delete-modal-container">
        <div className="text-content">
          <strong className="text-content-strong">Exluir Naver</strong>
          <span className="text-content-span">
            Tem certeza que deseja excluir esse Naver?
          </span>
        </div>
        <div className="close-modal-button-delete">
          <button
            className="close-modal-cancel"
            type="button"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="close-modal-delete"
            type="button"
            onClick={() => setIsModalvisible(true)}
          >
            Excluir
          </button>
        </div>
      </div>
      {isModalVisible ? (
        <WarningDeleteModal onClose={() => setIsModalvisible(false)} />
      ) : null}
    </div>
  );
}

export default ConfirmDeleteModal;
