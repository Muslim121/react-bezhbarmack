import React from "react";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <CiSearch className={styles.icon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск бежбармаков..."
        className={styles.input}
      />
      {searchValue && (
        <IoIosCloseCircleOutline
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
