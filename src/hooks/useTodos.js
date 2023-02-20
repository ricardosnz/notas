import { useContext } from 'react';
import { TestContext } from '../TodoContext/test';

export default function useTodo() {
  const todoConsumer = useContext(TestContext);
  return todoConsumer;
}
