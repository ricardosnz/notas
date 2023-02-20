import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoItem.css';
// pendiente cambiar el icono de elimminar
const TodoItem = ({ todo }) => {
  const { handleCompletedTodo, handleConfirmDelete } = useContext(TodoContext);
  const classNameCompleted = todo.completed ? 'completed' : '';
  const contentCompleted = todo.completed ? '🔨' : '✔';

  return (
    <li className={`TodoItem ${classNameCompleted}`}>
      <button
        className="uncompleted-Icon"
        onClick={() => handleCompletedTodo(todo)}
      >
        {contentCompleted}
      </button>
      <h2 className="titleTodo">{todo.title}</h2>
      <button className="deleteIcon" onClick={() => handleConfirmDelete(todo)}>
        🗑
      </button>
    </li>
  );
};

export { TodoItem };
