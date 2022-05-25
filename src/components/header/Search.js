import React from "react";
import "./Styles.css";
const Search = () => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="type your movie.."
          name="search"
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
