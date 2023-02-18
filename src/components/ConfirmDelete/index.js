import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './ConfirmDelete.css';

const ConfirmDelete = () => {
  const { handleDeleteTodo } = useContext(TodoContext);  
  return (
    <div className="ConfirmDelete">
      <div className="confirm-container">
        <h4>Estas seguro de eliminarlo?</h4>
        <button
          className="confirmButton"
          onClick={() => handleDeleteTodo(true)}
        >
          Claro que si
        </button>
        <button
          className="cancelButton"
          onClick={() => handleDeleteTodo(false)}
        >
          Claro que no
        </button>
      </div>
    </div>
  );
};

export { ConfirmDelete };
