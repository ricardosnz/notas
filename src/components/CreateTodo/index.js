import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateTodo.css';

import Modal from '../Modal';
import useTodos from '../../hooks/useTodos';

const CreateTodoer = () => {
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

const CreateTodo = ({ confirmedTodo, toggleContirmTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    confirmedTodo(e.target.elements.todoInput.value);
  };

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
          <button type="submit" className="buttons__add">Agregar</button>
          <button type="button" className="buttons__cancel" onClick={toggleContirmTodo}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { CreateTodo };
