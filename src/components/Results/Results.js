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
  return searchResults.map((result) => {
    return <RenderResult result={result} />;
  });
};

const mapStateToProps = (state) => {
  return {
    //get bcuw of immutable JS
    searchResults: state.searchReducer.get("searchResults"),
  };
};
export default connect(mapStateToProps)(Results);
