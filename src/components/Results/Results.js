import React from "react";
import { connect } from "react-redux";
import RenderResult from "./RenderResult";
const Results = (props) => {
  console.log(props);

  if (props.searchResults) {
    return <>{renderSearchResults(props.searchResults)}</>;
  }

  return null;
};

const renderSearchResults = (searchResults) => {
  return searchResults.map((result, key) => {
    return <RenderResult result={result} key={key} />;
  });
};

const mapStateToProps = (state) => {
  return {
    //get bcuz of immutable JS
    searchResults: state.searchReducer.get("searchResults"),
  };
};
export default connect(mapStateToProps)(Results);
