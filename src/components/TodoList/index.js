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
  const { todos, filteredTodos } = useTodos();
  return (
    <ul className="TodoList">
      {!filteredTodos.length ? (
        <h3>You do not have ToDo's...</h3>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};
export { TodoList };
