import { connect } from "react-redux";
import React from "react";
import "./Styles.css";
import { getSearchResults } from "../../redux/searchMovies/action";

const Search = (props) => {
  // console.log(props);
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
      </form>
    </div>
  );
};

//getting the action and handling the e.target.value && send it as function parameter
//that takes event and the props as parameters.
//the receiving this function as a parameter and then call the action(value) in the saga and pass
//the value as parameter of the search query in the API.
const mapDispatchToProps = {
  getSearchResults,
};

export default connect(null, mapDispatchToProps)(Search);
