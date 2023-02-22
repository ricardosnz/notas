import React, { useContext } from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../../TodoContext';

import useTodos from '../../hooks/useTodos';

const TodoLister = () => {
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

const TodoList = () => {
  const { todos, filtered } = useTodos();
  return (
    <ul className="TodoList">
      {!filtered.length ? (
        <h3>No hay tareas...</h3>
      ) : (
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};
export { TodoList };
