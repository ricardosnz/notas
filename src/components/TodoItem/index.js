import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoItem.css';
import useTodos from '../../hooks/useTodos';

import Modal from '../Modal';
import { ConfirmDelete } from '../ConfirmDelete';

const TodoItemer = ({ todo }) => {
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

const TodoItem = ({ todo }) => {
  const { toggleCompletedTodo, deleteTodo } = useTodos();
  const [toggleModal, setToggleModal] = useState(false);

  const handleCompletedTodo = () => {
    toggleCompletedTodo(todo.id);
  };

  const toggleConfirmDelete = () => {
    setToggleModal((prevToggleModal) => !prevToggleModal);
  };

  const confirmedDelete = () => {
    deleteTodo(todo.id);
    setToggleModal(false);
  };

  const classNameCompleted = todo.completed ? 'completed' : '';
  const contentCompleted = todo.completed ? '🔨' : '✔';

  return (
    <li className={`TodoItem ${classNameCompleted}`}>
      <button className="uncompleted-Icon" onClick={handleCompletedTodo}>
        {contentCompleted}
      </button>
      <h2 className="titleTodo">{todo.title}</h2>
      <button className="deleteIcon" onClick={toggleConfirmDelete}>
        🗑
      </button>
      {toggleModal && (
        <ConfirmDelete
          todo={todo.title}
          confirmedDelete={confirmedDelete}
          toggleConfirmDelete={toggleConfirmDelete}
        />
      )}
    </li>
  );
};

export { TodoItem };
