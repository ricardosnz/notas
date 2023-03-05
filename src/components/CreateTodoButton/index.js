import React, { useState } from 'react';
import './CreateTodoButton.css';
import { CreateTodo } from '../CreateTodo';
import useTodos from '../../hooks/useTodos';

const CreateTodoButton = () => {
  const { createTodo } = useTodos();
  const [toggleModal, setToggleModal] = useState(false);

  const toggleContirmTodo = () => {
    setToggleModal((prevToggleModal) => !prevToggleModal);
  };

  const confirmedTodo = (todo) => {
    createTodo(todo);
    setToggleModal(false);
  };

  return (
    <div className="CreateTodoButton">
      <button onClick={toggleContirmTodo}>Create</button>
      {toggleModal && (
        <CreateTodo
          confirmedTodo={confirmedTodo}
          toggleContirmTodo={toggleContirmTodo}
        />
      )}
    </div>
  );
};

export { CreateTodoButton };
