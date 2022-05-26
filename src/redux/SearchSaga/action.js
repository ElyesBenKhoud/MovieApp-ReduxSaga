import { movies } from "../SagaMovies/reducer";
import { GET_BY_SEARCH, GET_BY_SEARCH_SUCCESS } from "./types";

export const GetSearchMovie = () => ({
  type: GET_BY_SEARCH,
});

export const GetSearchMovieSuccess = (movies) => ({
  type: GET_BY_SEARCH_SUCCESS,
  movies,
});

export const gettingMoviesFromReducer = () => {
  return movies.map((movie) => movie);
};
