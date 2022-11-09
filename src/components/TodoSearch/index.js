import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';
// pendiente icono del buscador
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="search__input">
          <ion-icon name="search-outline"></ion-icon>bus
          <input
            id="search"
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Buscar to do..."
          ></input>
          aa
        </label>
      </form>
    </div>
  );
};

export { TodoSearch };
