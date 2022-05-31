import React from "react";
import { connect } from "react-redux";
import RenderResult from "./RenderResult";
import { VscCheck, VscChromeClose } from "react-icons/vsc";

const Results = (props) => {
  // console.log(props.getSearchResults);
  //received the searchResults from the state as props
  if (props.searchResults) {
    return (
      <>
        {props.searchResults.length <= 0 ? (
          <h4>
            <VscChromeClose /> Type and search for your movie ...{" "}
          </h4>
        ) : (
          <h4>
            <VscCheck /> Here your desired movie:
          </h4>
        )}
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
