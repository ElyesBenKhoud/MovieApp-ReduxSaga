export const LoadMovie = () => ({
  type: "LOAD_MOVIE_REQUESTED",
});

export const LoadMovieSuccess = (movies) => ({
  type: "LOAD_MOVIE_SUCCESS",
  payload: movies,
});

export const LoadMovieFail = (message) => ({
  type: "LOAD_MOVIE_FAIL",
  payload: message,
});
