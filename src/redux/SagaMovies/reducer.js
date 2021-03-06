import {
  LOAD_MOVIE_REQUESTED,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_FAIL,
} from "./types";

export const initial_state = {
  movies: [],
  loading: true,
  error: null,
  isAdmin: false,
};

// export const movies = initial_state.movies;

const MovieReducer = (state = initial_state, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_MOVIE_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_MOVIE_SUCCESS: {
      const { movies } = action;
      return {
        ...state,
        movies: movies,
        loading: false,
      };
    }
    case LOAD_MOVIE_FAIL: {
      const { message } = action;
      return {
        ...state,
        loading: false,
        error: message,
      };
    }
    case "SET_ADMIN": {
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    }

    default:
      return state;
  }
};

export default MovieReducer;
