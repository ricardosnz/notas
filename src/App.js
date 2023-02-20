import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { ConfirmDelete } from './components/ConfirmDelete';
import { CreateTodo } from './components/CreateTodo';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

import TestProvider from './TodoContext/test'

const App = () => {
  const { created, deleted } = useContext(TodoContext);

  return (
    <div className="App">
      <TestProvider>
        <TodoSearch />

        <TodoCounter />

        <TodoList />

        <CreateTodoButton />

        {deleted && <ConfirmDelete />}

        {created && <CreateTodo />}
      </TestProvider>
    </div>
  );
};

export default App;
