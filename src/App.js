import React from 'react';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const App = () => (
  <div className="App">
    <TodoSearch />
    <TodoCounter />
    <TodoList />
    <CreateTodoButton />
  </div>
);

export default App;
