import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoItem.css';
import useTodos from '../../hooks/useTodos';

import Modal from '../Modal';

const TodoItem = ({ todo }) => {
  const { handleCompletedTodo, handleConfirmDelete } = useContext(TodoContext);
  const classNameCompleted = todo.completed ? 'completed' : '';
  const contentCompleted = todo.completed ? '🔨' : '✔';

  return (
    <li className={`TodoItem ${classNameCompleted}`}>
      {/* <Modal /> */}
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

const TodoItemer = ({ todo }) => {
  const { toggleCompletedTodo } = useTodos();
  const [toggleModal, setToggleModal] = useState(false);

  const classNameCompleted = todo.completed ? 'completed' : '';
  const contentCompleted = todo.completed ? '🔨' : '✔';

  const handleCompletedTodo = () => {
    toggleCompletedTodo(todo.id);
  };

  const handleConfirmDelete = () => {
    setToggleModal((prevToggleModal) => !prevToggleModal);
  };

  return (
    <li className={`TodoItem ${classNameCompleted}`}>
      <button className="uncompleted-Icon" onClick={handleCompletedTodo}>
        {contentCompleted}
      </button>
      <h2 className="titleTodo">{todo.title}</h2>
      <button className="deleteIcon" onClick={handleConfirmDelete}>
        🗑
      </button>
    </li>
  );
};

export { TodoItem };
