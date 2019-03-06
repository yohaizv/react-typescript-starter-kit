import { put, call } from "redux-saga/effects";
import { sendAsyncMessage } from "./sagas";
import { SEND_ASYNC_MESSAGE, ChatActionTypes } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";
import { recordSaga } from "../utils/testUtils";
import * as api from "../services/api";

jest.mock("../services/api", () => ({
  getBotUserName: jest.fn().mockImplementation(() => "Test Bot user name")
}));

let originalDateNow: () => number;
const mockDateNow = () => 1462361249717;

describe("sendAsyncMessage Saga: ", () => {
  beforeEach(function() {
    originalDateNow = Date.now;
    Date.now = mockDateNow;
  });

  afterEach(function() {
    Date.now = originalDateNow;
  });

  it("Get user from API and call sendMessage", async () => {
    const action: ChatActionTypes = {
      type: SEND_ASYNC_MESSAGE,
      payload: "test async message"
    };
    const dispatched = await recordSaga(sendAsyncMessage, action);

    expect(api.getBotUserName).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(
      sendMessage({
        message: action.payload,
        timestamp: mockDateNow(),
        user: "Test Bot user name"
      })
    );
  });
});
