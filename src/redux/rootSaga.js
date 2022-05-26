import { all, fork } from "redux-saga/effects";
import { LoadOtherMoviesSagas } from "./OtherMovies/sagas";
import { OnLoadMovie } from "./SagaMovies/sagas";
import { LoadSearchedMovie } from "./SearchSaga/sagas";

export default function* rootSaga() {
  yield all([
    fork(OnLoadMovie),
    fork(LoadOtherMoviesSagas),
    fork(LoadSearchedMovie),
  ]);
}
