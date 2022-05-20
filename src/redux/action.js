export const LoadMovie = (movies) => ({
  type: "LOAD_MOVIE",
  payload: movies,
});

export const LoadMovieFail = (error) => ({
  type: "LOAD_MOVIE_FAIL",
  payload: error,
});
