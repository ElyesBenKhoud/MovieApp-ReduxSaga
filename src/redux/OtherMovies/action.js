import { GET_OTHER_MOVIE_REQUESTED, OTHER_SUCCESS } from "./types";

export const LoadOtherMovies = () => ({
  type: GET_OTHER_MOVIE_REQUESTED,
});

export const LoadOtherMoviesSuccess = (movies) => ({
  type: OTHER_SUCCESS,
  movies,
});
