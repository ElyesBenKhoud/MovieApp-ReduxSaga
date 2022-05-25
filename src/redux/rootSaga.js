import { all, fork } from "redux-saga/effects";
import { LoadOtherMoviesSagas } from "./OtherMovies/sagas";
import { OnLoadMovie } from "./SagaMovies/sagas";

export default function* rootSaga() {
  yield all([fork(OnLoadMovie), fork(LoadOtherMoviesSagas)]);
}
