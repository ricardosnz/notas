import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem';
import useTodos from '../../hooks/useTodos';

const TodoList = () => {
  const { filteredTodos } = useTodos();
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
