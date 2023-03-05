import { useContext } from 'react';
import { TestContext } from '../context/TodoContext';

export default function useTodo() {
  const todoConsumer = useContext(TestContext);
  return todoConsumer;
}
