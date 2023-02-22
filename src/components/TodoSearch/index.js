import React, { useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';

import useTodos from '../../hooks/useTodos';

const TodoSearcher = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="TodoSearch">
      <h2 className="search__title">ToDo</h2>
      <form onSubmit={handleSubmit} className="search__form">
        <label htmlFor="search" className="search__input">
          <input
            id="search"
            value={searchValue}
            onChange={handleChange}
            placeholder="Buscar to do..."
          ></input>
          🔍
        </label>
      </form>
    </div>
  );
};

const TodoSearch = () => {
  const [search, setSearch] = useState('');
  const { filterTodos, filtered, todos } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    filterTodos(search);
  };
  const handleChange = ({ target }) => {
    setSearch(target.value);
    // filterTodos(target.value)
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
            placeholder="Buscar to do..."
          ></input>
          🔍
        </label>
      </form>
    </div>
  );
};

export { TodoSearch };
