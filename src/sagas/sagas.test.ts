import { put, call } from "redux-saga/effects";
import { sendAsyncMessage, exampleAPI } from "./sagas";
import { SEND_ASYNC_MESSAGE } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";

describe("sendAsyncMessage Sage: ", () => {
  const asyncMessage = "test async message";
  const gen = sendAsyncMessage({
    type: SEND_ASYNC_MESSAGE,
    payload: asyncMessage
  });
  it("Call exampleAPI", () => {
    const { value } = gen.next();
    expect(value).toEqual(call(exampleAPI));
  });
  it("Dispatch sendMessage", () => {
    // const response = gen.next().value;
    // const timestampVal = gen.next().value;
    // expect(response).toEqual(put(sendMessage({
    //     message:asyncMessage,
    //     timestamp:timestampVal,
    //     user:"Async Chat Bot"
    // }))
  });
});
