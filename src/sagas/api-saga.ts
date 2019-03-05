import { takeEvery, call, put } from "redux-saga/effects";
import { SEND_ASYNC_MESSAGE, ChatActionTypes } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";

export default function* watchSendAsyncMessage() {
  yield takeEvery(SEND_ASYNC_MESSAGE, sendAsyncMessage);
}

function* sendAsyncMessage(action: ChatActionTypes) {
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
