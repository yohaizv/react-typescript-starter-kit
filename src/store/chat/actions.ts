import {
  Message,
  SEND_MESSAGE,
  SEND_ASYNC_MESSAGE,
  FORBIDDEN_WORD,
  DELETE_MESSAGE
} from "./types";

export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  };
}
export function sendAsyncMessage(newMessageBody: string) {
  return {
    type: SEND_ASYNC_MESSAGE,
    payload: newMessageBody
  };
}

export function forbiddenWord() {
  return {
    type: FORBIDDEN_WORD
  };
}

export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  };
}
