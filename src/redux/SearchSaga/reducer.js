import { GET_BY_SEARCH, GET_BY_SEARCH_SUCCESS } from "./types";

const initial_state = {
  movies: [],
};

const SearchMovieReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_BY_SEARCH: {
      return {
        ...state,
      };
    }
    case GET_BY_SEARCH_SUCCESS: {
      const { movies } = action;
      return {
        ...state,
        movies: movies,
      };
    }
    default: {
      return state;
    }
  }
};

export default SearchMovieReducer;
