/*
todos: []
searchValue: ''
deleted: false
created: false
indexTodo: ''
newTodo: ''
*/
import { getMaxId } from '../utils';
export const SET_TODOS = 'SET_TODOS';
export const SET_INDEX_TODO = 'SET_INDEX_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED_TODO = 'TOGGLE_COMPLETED_TODO';

export const initialTodoState = {
  todos: [],
};

// removed: SET_SEARCH_VALUE, SET_DELETED, SET_CREATED, SET_NEW_TODO,
export default function todoReducer(state, action) {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      const newTodo = {
        id: getMaxId(state.todos),
        title: action.payload,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_COMPLETED_TODO:
      const indexTodo = state.todos.findIndex(
        ({ id }) => id === action.payload
      );
      const newTodos = structuredClone(state.todos);
      newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
      return { ...state, todos: newTodos };
    default:
      return state;
  }
}
