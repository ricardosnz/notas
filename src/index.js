import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { TodoProvider } from './TodoContext';

import App from './App';

//terminar la version movil y agregarle los iconos faltantes

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);
