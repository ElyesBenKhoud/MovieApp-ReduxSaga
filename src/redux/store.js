import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { OnLoadMovie } from "./SagaMovies/sagas";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
// const middlewares = [logger, sagaMiddleware];
const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default store;
