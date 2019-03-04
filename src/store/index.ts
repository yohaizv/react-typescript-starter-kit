import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { forbiddenWordsMiddleware } from "../middleware";

const storeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;
