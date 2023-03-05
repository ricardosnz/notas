import { SET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED_TODO } from './types'
import { getMaxId } from '../utils';

export const initialTodoState = {
  todos: [],
};

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
