import React, { useState, useReducer, createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [todos, setTodos] = useLocalStorage('TODOV1', []);
  const [searchValue, setSearchValue] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [created, setCreated] = useState(false);
  const [indexTodo, setIndex] = useState('');
  const [newTodo, setNewTodo] = useState('');

  let listTodos = [...todos];

  searchValue &&
    (listTodos = todos.filter((todo) => todo.title.includes(searchValue)));

  const handleCompletedTodo = (todoCompleted) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoCompleted.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  //----------------------Delete Todo---------------------
  const handleConfirmDelete = (todoDelete) => {
    deleted ? setDeleted(false) : setDeleted(true);
    setIndex(todoDelete.id);
  };

  const handleDeleteTodo = (confirm) => {
    if (confirm) {
      setTodos(todos.filter((todo) => todo.id !== indexTodo));
    }

    setDeleted(false);
  };

  //---------------------Create Todo---------------------

  const handleConfirmTodo = () => {
    created ? setCreated(false) : setCreated(true);
  };

  const handleCreateTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      },
    ]);
    setCreated(false);
  };

  return (
    <TodoContext.Provider
      value={{
        created,
        deleted,
        handleCompletedTodo,
        handleConfirmDelete,
        handleConfirmTodo,
        handleCreateTodo,
        handleDeleteTodo,
        indexTodo,
        listTodos,
        searchValue,
        setNewTodo,
        setSearchValue,
        setTodos,
        todos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
