import React, { useState } from 'react';
import './TodoSearch.css';
import useTodos from '../../hooks/useTodos';

const TodoSearch = () => {
  const [search, setSearch] = useState('');
  const { filterTodos } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    filterTodos(search);
  };
  const handleChange = ({ target }) => {
    setSearch(target.value);
    filterTodos(target.value);
  };

  return (
    <div className="TodoSearch">
      <h2 className="search__title">ToDo</h2>
      <form onSubmit={handleSubmit} className="search__form">
        <label htmlFor="search" className="search__input">
          <input
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Limpiar el salon, correr..."
          ></input>
          🔍
        </label>
      </form>
    </div>
  );
};

export { TodoSearch };
