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
        Estas seguro de eliminar a <span>{todo}</span>?
      </h3>
      <div>
        <button className="confirmButton" onClick={confirmedDelete}>
          Eliminar
        </button>
        <button className="cancelButton" onClick={toggleConfirmDelete}>
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export { ConfirmDelete };
