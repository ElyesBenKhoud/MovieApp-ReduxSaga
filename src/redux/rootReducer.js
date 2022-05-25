import { combineReducers } from "redux";
import MovieReducer from "./SagaMovies/reducer";
import OtherMoviesReducer from "./OtherMovies/reducer";
const rootReducer = combineReducers({
  app: MovieReducer,
  app2: OtherMoviesReducer,
});
export default rootReducer;
