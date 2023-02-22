import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import debounce from 'just-debounce-it';

import {saveTodos, getTodos} from '../utils'
import {
  SET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../reducers/types';
import todoReducer, { initialTodoState } from '../reducers';

export const TestContext = createContext();

export default function TestProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const previousValue = useRef('');

  useEffect(() => {    
    dispatch({ type: SET_TODOS, payload: getTodos() });
  }, []);

  const createTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toggleCompletedTodo = (pk) => {
    dispatch({ type: TOGGLE_COMPLETED_TODO, payload: pk });
  };

  const deleteTodo = (pk) => {
    dispatch({ type: DELETE_TODO, payload: pk });
  };

  useEffect(() => {
    saveTodos(state.todos)
    setFilteredTodos(state.todos);
  }, [state.todos]);

  const filterTodos = useCallback(
    debounce((value) => {
      if (value === previousValue.current) return;
      previousValue.current = value;
      const todos = state.todos.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTodos(todos);
    }, 700),
    [filteredTodos]
  );

  return (
    <TestContext.Provider
      value={{
        createTodo,
        toggleCompletedTodo,
        deleteTodo,
        filterTodos,
        filteredTodos,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}
