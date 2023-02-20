import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

import useTodos from '../../hooks/useTodos';

const TodoCounterer = () => {
  const { todos } = useContext(TodoContext);

  const completedTodos = todos.filter(({ completed }) => completed).length;
  return (
    <div className="TodoCounter">
      Haz completado {completedTodos} de {todos.length} ToDo's
    </div>
  );
};

const TodoCounter = () => {
  const { todos } = useTodos();
  const completedTodos = todos.filter(({ completed }) => completed).length;
  return (
    <div className="TodoCounter">
      Haz completado {completedTodos} de {todos.length} ToDo's
    </div>
  );
};

export { TodoCounter };
