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
  const { filteredTodos } = useTodos();
  const completedTodos = filteredTodos.filter(
    ({ completed }) => completed
  ).length;

  const total = filteredTodos.length;

  if (!total) return null;
  return (
    <div className="TodoCounter">
      You have completed {completedTodos} of {total} ToDo's
    </div>
  );
};

export { TodoCounter };
