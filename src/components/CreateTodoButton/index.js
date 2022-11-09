import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
  const { handleConfirmTodo } = useContext(TodoContext);

  return (
    <div className="CreateTodoButton">
      <button onClick={handleConfirmTodo}>Crear</button>
    </div>
  );
};

export { CreateTodoButton };
