import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './ConfirmDelete.css';

import Modal from '../Modal';

const ConfirmDeleter = () => {
  const { handleDeleteTodo } = useContext(TodoContext);
  return (
    <Modal classname="ConfirmDelete">
      <h3 className="ConfirmDelete-title">Estas seguro de eliminarlo?</h3>
      <div>
        <button
          className="confirmButton"
          onClick={() => handleDeleteTodo(true)}
        >
          Eliminar
        </button>
        <button
          className="cancelButton"
          onClick={() => handleDeleteTodo(false)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

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
