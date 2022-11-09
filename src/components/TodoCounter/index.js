import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);

  const completedTodos = todos.filter(todo => todo.completed);
  return (
    <div className="TodoCounter">
      Haz completado {completedTodos.length} de {todos.length} ToDo's
    </div>
  );
};

export { TodoCounter };
