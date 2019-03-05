import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";

import { chatReducer } from "./chat/reducers";
import { systemReducer } from "./system/reducers";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configurationStore() {
  const initialSagaMiddleware = createSagaMiddleware();
  const middlewares = [forbiddenWordsMiddleware, initialSagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  initialSagaMiddleware.run(rootSaga);
  return store;
}
