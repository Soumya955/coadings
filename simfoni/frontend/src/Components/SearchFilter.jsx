import React from "react";
import "./css/searchFilter.css";
import { IoIosSearch } from "react-icons/io";

export default function SearchFilter({
  searchText,
  setSearchText,
  filter,
  setfilter,
  sort,
  setSort,
  getData,
}) {
  return (
    <div className="search-bar">
      <div>
        {" "}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
          placeholder="Search..."
        />
        <button
          className="search-button"
          onClick={() => getData(searchText, filter, sort)}
        >
          <IoIosSearch />
        </button>
      </div>

      <select
        className="filter-dropdown"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
      >
        <option value="">Filter</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
        <option value="type">Type</option>
      </select>
      <select
        className="sort-dropdown"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="asc">Sort by A-Z</option>
        <option value="desc">Sort by Z-A</option>
        <option value="asc">High to low</option>
        <option value="desc">Low to high</option>
      </select>
    </div>
  );
}
