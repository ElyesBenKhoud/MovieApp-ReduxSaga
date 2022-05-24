import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { OnLoadMovie } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// const middlewares = [logger, sagaMiddleware];
const middlewares = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(OnLoadMovie);
export default store;
