import { takeLatest, put, call } from "redux-saga/effects";

//call the api
import { fetchMovies } from "./api";

//import actions
import { LoadMovieSuccess, LoadMovieFail } from "./action";
//generator function

export function* OnLoadMovieAsync() {
  try {
    const response = yield call(fetchMovies);
    // yield put({ type: "LOAD_MOVIE_SUCCESS", movies: response.data.Search });
    const { data } = response;

    yield put(LoadMovieSuccess(data));
  } catch (error) {
    // yield put({ type: "LOAD_MOVIE_FAIL", message: error.message });
    yield put(LoadMovieFail(error));
  }
}

export function* OnLoadMovie() {
  yield takeLatest("LOAD_MOVIE_REQUESTED", OnLoadMovieAsync);
}
