const initial_state = {
  movies: [],
};

const MovieReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOAD_MOVIE": {
      return {
        ...state,
        movies: action.payload,
      };
    }
    default:
      return state;
  }
};

export default MovieReducer;
