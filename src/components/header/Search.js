import { connect } from "react-redux";
import React from "react";
import "./Styles.css";
import { getSearchResults } from "../../redux/searchMovies/action";

const Search = (props) => {
  console.log(props);
  // const GetDataTest = async (e) => {
  //   e.preventDefault();
  //   const url = `http://www.omdbapi.com/?s=${e.target.value}&&apikey=d7b52bbd`;
  //   const data = await axios.get(url);
  //   console.log(data.data.Search);
  // };

  const GetDataFromSaga = async (e, props) => {
    if (e.target.value.trim() !== "") {
      props.getSearchResults(e.target.value);
    }
  };

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="type your movie.."
          name="search"
          onChange={(e) => GetDataFromSaga(e, props)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  getSearchResults,
};

export default connect(null, mapDispatchToProps)(Search);
