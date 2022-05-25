import {
  LOAD_MOVIE_REQUESTED,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_FAIL,
} from "./types";

export const LoadMovie = () => ({
  type: LOAD_MOVIE_REQUESTED,
});

export const LoadMovieSuccess = (movies) => ({
  type: LOAD_MOVIE_SUCCESS,
  movies,
});

export const LoadMovieFail = (message) => ({
  type: LOAD_MOVIE_FAIL,
  message,
});
