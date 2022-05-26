import { combineReducers } from "redux";
import MovieReducer from "./SagaMovies/reducer";
import OtherMoviesReducer from "./OtherMovies/reducer";
import SearchMovieReducer from "./SearchSaga/reducer";
const rootReducer = combineReducers({
  app: MovieReducer,
  app2: OtherMoviesReducer,
  searchReducer: SearchMovieReducer,
});
export default rootReducer;
