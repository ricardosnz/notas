import React from 'react';
import './CreateTodo.css';
import Modal from '../Modal';

const CreateTodo = ({ confirmedTodo, toggleContirmTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { todoInput } = e.target.elements;
    if (todoInput.value !== '') confirmedTodo(todoInput.value);
  };

  return (
    <Modal classname="CreateTodo">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput" className="title">
          Create another note
        </label>
        <input
          id="todoInput"
          className="todoInput"
          placeholder="Levantarse para desayunar..."
        />
        <div className="buttons">
          <button type="submit" className="buttons__add">
            Add
          </button>
          <button
            type="button"
            className="buttons__cancel"
            onClick={toggleContirmTodo}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { CreateTodo };
