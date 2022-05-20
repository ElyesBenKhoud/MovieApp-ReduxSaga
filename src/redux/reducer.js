const initial_state = {
  movies: [],
  error: null,
  loading: true,
};

const MovieReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOAD_MOVIE": {
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    }
    case "LOAD_MOVIE_FAIL": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default MovieReducer;
