import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialSagaMiddleware = createSagaMiddleware();

const storeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialSagaMiddleware)
  )
);

initialSagaMiddleware.run(apiSaga);

export default store;
