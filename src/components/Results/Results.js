import React from "react";
import { connect } from "react-redux";
import RenderResult from "./RenderResult";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
const Results = (props) => {
  //received the searchResults from the state as props
  if (props.searchResults) {
    return (
      <>
        {!"" ? <VscCheck /> : <VscChromeClose />}
        {renderSearchResults(props.searchResults)}
      </>
    );
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
