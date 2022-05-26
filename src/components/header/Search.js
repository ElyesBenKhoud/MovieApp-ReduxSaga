import React, { useState } from "react";
import "./Styles.css";
const Search = () => {
  const [search, setSearch] = useState("");

  const onSubmitSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="search-container">
      <form onSubmit={onSubmitSearch}>
        <input
          type="text"
          value={search}
          placeholder="type your movie.."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
