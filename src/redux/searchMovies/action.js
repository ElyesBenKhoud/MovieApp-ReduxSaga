import { WATCH_GET_SEARCH_RESULTS } from "./types";

export const getSearchResults = (value) => ({
  type: WATCH_GET_SEARCH_RESULTS,
  value,
});
