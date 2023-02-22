import React from 'react';
import './ConfirmDelete.css';
import Modal from '../Modal';

const ConfirmDelete = ({ todo, confirmedDelete, toggleConfirmDelete }) => {
  return (
    <Modal classname="ConfirmDelete">
      <h3 className="ConfirmDelete-title">
        Are you sure to delete this <span>{todo}</span>?
      </h3>
      <div>
        <button className="confirmButton" onClick={confirmedDelete}>
          Delete
        </button>
        <button className="cancelButton" onClick={toggleConfirmDelete}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export { ConfirmDelete };
