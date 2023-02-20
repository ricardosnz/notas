import React, { createContext, useReducer, useEffect } from 'react';
import todoReducer, { initialTodoState } from '../reducers';

export const TestContext = createContext();

export default function TestProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  useEffect(() => {
    const localStorageTodos = localStorage.getItem('TODOV1');
    if (!localStorageTodos) return;
    const parseTodos = JSON.parse(localStorageTodos);
    dispatch({ type: 'SET_TODOS', payload: parseTodos });
  }, []);

  const createTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toggleCompletedTodo = (pk) => {
    dispatch({ type: TOGGLE_COMPLETED_TODO, pk });
  };

  const deleteTodo = (pk) => {
    dispatch({ type: DELETE_TODO, payload: pk });
  };

  return (
    <TestContext.Provider
      value={{ createTodo, toggleCompletedTodo, deleteTodo, ...state }}
    >
      {children}
    </TestContext.Provider>
  );
}
