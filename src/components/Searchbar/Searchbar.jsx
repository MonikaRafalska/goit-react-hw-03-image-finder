import React from "react";
import styles from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <header className={styles.searchbar}>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.searchForm_button}>
          <span>
            <FaSearch />
          </span>
        </button>

        <input
          className={styles.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
