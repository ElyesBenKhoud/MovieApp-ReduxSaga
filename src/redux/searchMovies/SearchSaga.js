import { call, put, takeLatest } from "redux-saga/effects";
import { WATCH_GET_SEARCH_RESULTS } from "./types";
import axios from "axios";

function* setSearch({ value }) {
  try {
    const url = `http://www.omdbapi.com/?s=${value}&&apikey=d7b52bbd`;
    const data = yield axios.get(url);
    console.log(data.data.Search);
  } catch (error) {
    console.log(error);
  }
}

function* watchSearch() {
  yield takeLatest(WATCH_GET_SEARCH_RESULTS, setSearch);
}

export default watchSearch;
