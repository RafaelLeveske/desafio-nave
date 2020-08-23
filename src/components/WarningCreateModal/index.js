import React from 'react';

function WarningCreateModal({
  id = 'warning-create-modal',
  onClose = () => {},
  children,
}) {
  const handleOutsideClick = e => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="warning-create-modal" onClick={handleOutsideClick}>
      <div className="warning-create-modal-container">
        <div className="warning-create-content">{children}</div>
      </div>
    </div>
  );
}

export default WarningCreateModal;
