const initial_state = {
  movies: [],
  loading: true,
  error: null,
};

const MovieReducer = (state = initial_state, action) => {
  const { movies, message } = action;

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
        movies: movies,
      };
    }
    case "LOAD_MOVIE_FAIL": {
      return {
        ...state,
        loading: false,
        error: message,
      };
    }

    default:
      return state;
  }
};

export default MovieReducer;
