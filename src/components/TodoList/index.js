import React, { useContext } from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../../TodoContext';

const TodoList = () => {
  const { listTodos } = useContext(TodoContext);

  return (
    <ul className="TodoList">
      {listTodos.length > 0 ? (
        listTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <h3>No hay tareas.</h3>
      )}
    </ul>
  );
};
export { TodoList };
