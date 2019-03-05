import { all, fork } from "redux-saga/effects";
import watchSendAsyncMessage from "./api-saga";

export default function* root() {
  yield all([fork(watchSendAsyncMessage)]);
}
