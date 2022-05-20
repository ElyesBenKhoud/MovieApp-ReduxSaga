import { takeLatest, put, call } from "redux-saga/effects";

//call the api
import { fetchMovies } from "./api";
//import the action needed
import { LoadMovie, LoadMovieFail } from "./action";

//generator function

export function* OnLoadMovieAsync() {
  try {
    const response = yield call(fetchMovies);
    yield put(LoadMovie, response.data);
  } catch (error) {
    yield put(LoadMovieFail(error));
  }
}

export function* OnLoadMovie() {
  yield takeLatest("LOAD_MOVIE", OnLoadMovieAsync);
}
