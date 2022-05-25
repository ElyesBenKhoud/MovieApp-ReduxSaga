import { combineReducers } from "redux";
import MovieReducer from "./SagaMovies/reducer";
const rootReducer = combineReducers({
  app: MovieReducer,
});
export default rootReducer;
