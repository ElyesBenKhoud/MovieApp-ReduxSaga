import { Map, fromJS } from "immutable";
import { ADD_SEARCH_RESULTS } from "./types";

const initial_state = Map({
  searchResults: [],
});

const SearchReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULTS: {
      return state.merge({
        searchResults: fromJS(action.results),
      });
    }
    default: {
      return state;
    }
  }
};

export default SearchReducer;
