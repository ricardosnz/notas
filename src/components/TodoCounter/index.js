import React from 'react';
import './TodoCounter.css';
import useTodos from '../../hooks/useTodos';

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
