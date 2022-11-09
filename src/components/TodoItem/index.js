import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoItem.css';
// pendiente cambiar el icono de elimminar
const TodoItem = ({ todo }) => {
  const { handleCompletedTodo, handleConfirmDelete } = useContext(TodoContext);

  return (
    <>
      <li className="TodoItem">
        <button
          className={`uncompleted-Icon ${todo.completed && 'completed-Icon'}`}
          onClick={() => handleCompletedTodo(todo)}
        >
          {todo.completed ? <span>completado</span> : <span>complentar</span>}
        </button>
        <div className={`titleTodo ${todo.completed && 'completed'}`}>
          {todo.title}
        </div>
        <button
          className="deleteIcon"
          onClick={() => handleConfirmDelete(todo)}
        >
          Eliminar
        </button>
      </li>
    </>
  );
};

export { TodoItem };
