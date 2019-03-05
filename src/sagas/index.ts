import { all, fork } from "redux-saga/effects";
import watchSendAsyncMessage from "./sagas";

export default function* root() {
  yield all([fork(watchSendAsyncMessage)]);
}
