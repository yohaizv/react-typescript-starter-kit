import { takeEvery, call, put } from "redux-saga/effects";
import { SEND_ASYNC_MESSAGE, ChatActionTypes } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";

export default function* watchSendAsyncMessage() {
  yield takeEvery(SEND_ASYNC_MESSAGE, sendAsyncMessage);
}

export function* sendAsyncMessage(action: ChatActionTypes) {
  try {
    if (action.type === SEND_ASYNC_MESSAGE) {
      const user = yield call(exampleAPI);
      const timestamp = yield new Date().getTime();
      console.log("In saga: action=", action);
      yield put(
        sendMessage({
          message: action.payload,
          timestamp,
          user
        })
      );
    }
  } catch (e) {}
}

export function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
