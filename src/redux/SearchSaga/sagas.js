import { GET_BY_SEARCH } from "./types";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetSearchMovie } from "./action";

import { initial_state } from "../SagaMovies/reducer";

export function* LoadSearchedMovieAsync() {
  try {
    //get the array of movies from movie reducer map through it and store it into variable
    const movies = yield initial_state.movies.map((movie) => movie);
    const response = yield call(movies);
    yield put(GetSearchMovie(response));
  } catch (error) {
    console.log("here there is an error man focus more =>", error);
  }
}

export function* LoadSearchedMovie() {
  yield takeLatest(GET_BY_SEARCH, LoadSearchedMovieAsync);
}
