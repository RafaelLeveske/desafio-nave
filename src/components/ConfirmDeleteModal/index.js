import React from 'react';

import './styles.css';

function ConfirmDeleteModal({
  id = 'confirm-delete-modal',
  onClose = () => {},
  children,
}) {
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
        <div className="close-modal-button-delete">{children}</div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
