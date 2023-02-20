import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';
const TodoSearch = () => {
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

export { TodoSearch };
