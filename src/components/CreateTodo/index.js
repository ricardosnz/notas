import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateTodo.css';

import Modal from '../Modal';
import useTodos from '../../hooks/useTodos';

const CreateTodo = () => {
  const { handleConfirmTodo, handleCreateTodo, setNewTodo } =
    useContext(TodoContext);

  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => setNewTodo(e.target.value);

  return (
    <Modal classname="CreateTodo">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput" className="title">
          Crear otra Tarea
        </label>
        <input
          id="todoInput"
          name="todovalue"
          className="todoInput"
          onChange={handleChange}
          placeholder="Crea tu To Do aqui ..."
        />
        <div className="buttons">
          <button className="buttons__add" onClick={handleCreateTodo}>
            Agregar
          </button>
          <button className="buttons__cancel" onClick={handleConfirmTodo}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

const CreateTodoer = () => {
  const { createTodo } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(e.target.elements.todoInput.value);
  }

  return (
    <Modal classname="CreateTodo">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput" className="title">
          Crear otra Tarea
        </label>
        <input
          id="todoInput"
          className="todoInput"
          placeholder="Crea tu To Do aqui ..."
        />
        <div className="buttons">
          <button className="buttons__add" onClick={handleCreateTodo}>
            Agregar
          </button>
          <button className="buttons__cancel" onClick={handleConfirmTodo}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { CreateTodo };
