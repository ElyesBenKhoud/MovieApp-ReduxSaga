import { GET_OTHER_MOVIE_REQUESTED, OTHER_SUCCESS } from "./types";

const initial_state = {
  movies: [],
  loading: true,
};

const OtherMoviesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_OTHER_MOVIE_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case OTHER_SUCCESS: {
      const { movies } = action;
      return {
        ...state,
        loading: false,
        movies: movies,
      };
    }
    default:
      return state;
  }
};

export default OtherMoviesReducer;
