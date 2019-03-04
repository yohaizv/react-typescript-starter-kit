import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_REQUESTED, DATA_LOADED, API_ERROR } from "../actions";

export default function* watcherSage() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERROR, payload: e });
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}
