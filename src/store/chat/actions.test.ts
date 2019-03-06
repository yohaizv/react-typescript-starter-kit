import { sendMessage } from "./actions";
import { SEND_MESSAGE } from "./types";

describe("Chat actions: ", () => {
  it("should create action to sendMessage", () => {
    const message = {
      message: "test message",
      timestamp: 123,
      user: "test user"
    };
    const action = sendMessage(message);

    expect(action).toEqual({
      type: SEND_MESSAGE,
      payload: message
    });
  });
});
