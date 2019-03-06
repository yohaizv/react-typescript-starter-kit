import { chatReducer } from "./reducers";
import {
  SEND_MESSAGE,
  FORBIDDEN_WORD,
  DELETE_MESSAGE,
  ChatState
} from "./types";

describe("Chat Reducers", () => {
  let newChatState: ChatState;
  it("should handle SEND_MESSAGE", () => {
    const message = {
      message: "test message",
      timestamp: 123456,
      user: "test user"
    };
    const state = chatReducer(undefined, {
      type: SEND_MESSAGE,
      payload: message
    });
    newChatState = {
      messages: [message],
      forbiddenWord: false
    };
    expect(state).toEqual(newChatState);
  });
  it("should handle FORBIDDEN_WORD", () => {
    const state = chatReducer(undefined, {
      type: FORBIDDEN_WORD
    });
    newChatState = {
      messages: [],
      forbiddenWord: true
    };
    expect(state).toEqual(newChatState);
  });
  it("should handle DELETE_MESSAGE", () => {
    const initialState: ChatState = {
      messages: [
        {
          user: "test user",
          message: "test message",
          timestamp: 123456
        }
      ],
      forbiddenWord: false
    };
    const state = chatReducer(initialState, {
      type: DELETE_MESSAGE,
      meta: { timestamp: initialState.messages[0].timestamp }
    });
    newChatState = {
      messages: [],
      forbiddenWord: false
    };
    expect(state).toEqual(newChatState);
  });
});
