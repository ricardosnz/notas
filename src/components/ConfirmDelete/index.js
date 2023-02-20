import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './ConfirmDelete.css';

import Modal from '../Modal';

const ConfirmDelete = () => {
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

export { ConfirmDelete };
