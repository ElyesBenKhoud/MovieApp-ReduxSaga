import { call, put, takeLatest } from "redux-saga/effects";

import { GET_OTHER_MOVIE_REQUESTED } from "./types";
import { LoadOtherMoviesSuccess } from "./action";
import { fetchOtherMovies } from "../api";

export function* LoadOtherMoviesAsync() {
  try {
    const response = yield call(fetchOtherMovies);
    const { data } = response;
    // console.log(data);
    yield put(LoadOtherMoviesSuccess(data.Search));
  } catch (error) {
    console.log(error);
  }
}

export function* LoadOtherMoviesSagas() {
  yield takeLatest(GET_OTHER_MOVIE_REQUESTED, LoadOtherMoviesAsync);
}
