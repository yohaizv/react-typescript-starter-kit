import { takeEvery, call, put } from "redux-saga/effects";
import { SEND_ASYNC_MESSAGE, ChatActionTypes } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";

export default function* watcherSage() {
  yield takeEvery(SEND_ASYNC_MESSAGE, workerSaga);
}

function* workerSaga(action: ChatActionTypes) {
  try {
    if (action.type === SEND_ASYNC_MESSAGE) {
      const user = yield exampleAPI();
      console.log("In saga: action=", action);
      yield put(
        sendMessage({
          message: action.payload,
          timestamp: new Date().getTime(),
          user
        })
      );
    }
  } catch (e) {
    
  }
}

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
