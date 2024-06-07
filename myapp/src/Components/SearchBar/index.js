import React from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="search"
        placeholder="Search by author"
      ></input>
      <FaSearch id="search-icon" />
    </div>
  );
};

export default SearchBar;
