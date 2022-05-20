import { combineReducers } from "redux";
import MovieReducer from "./reducer";
const rootReducer = combineReducers({
  app: MovieReducer,
});
export default rootReducer;
