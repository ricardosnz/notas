import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import debounce from 'just-debounce-it';

import todoReducer, {
  initialTodoState,
  SET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../reducers';

export const TestContext = createContext();

export default function TestProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const previousValue = useRef('');

  useEffect(() => {
    const localStorageTodos = localStorage.getItem('TODOV1');
    if (!localStorageTodos) return;
    const parseTodos = JSON.parse(localStorageTodos);
    dispatch({ type: SET_TODOS, payload: parseTodos });
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
