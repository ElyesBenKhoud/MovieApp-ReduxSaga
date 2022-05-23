const initial_state = {
  movies: [],
  error: null,
  loading: true,
};

const MovieReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOAD_MOVIE_REQUESTED": {
      return {
        ...state,
        loading: true,
      };
    }
    case "LOAD_MOVIE_SUCCESS": {
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    }
    case "LOAD_MOVIE_FAIL": {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }

    default:
      return state;
  }
};

export default MovieReducer;
