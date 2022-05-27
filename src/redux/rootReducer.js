import { combineReducers } from "redux";
import MovieReducer from "./SagaMovies/reducer";
import OtherMoviesReducer from "./OtherMovies/reducer";
import SearchReducer from "./searchMovies/SearchReducer";
const rootReducer = combineReducers({
  app: MovieReducer,
  app2: OtherMoviesReducer,
  searchReducer: SearchReducer,
});
export default rootReducer;
