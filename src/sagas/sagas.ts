import { takeEvery, call, put } from "redux-saga/effects";
import { SEND_ASYNC_MESSAGE, ChatActionTypes } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";
import { getBotUserName } from "../services/api";

export default function* watchSendAsyncMessage() {
  yield takeEvery(SEND_ASYNC_MESSAGE, sendAsyncMessage);
}

export function* sendAsyncMessage(action: ChatActionTypes) {
  try {
    if (action.type !== SEND_ASYNC_MESSAGE) return;
    const user = yield call(getBotUserName);
    const timestamp = yield Date.now();
    console.log("In saga: action=", action);
    yield put(
      sendMessage({
        message: action.payload,
        timestamp,
        user
      })
    );
  } catch (e) {}
}
