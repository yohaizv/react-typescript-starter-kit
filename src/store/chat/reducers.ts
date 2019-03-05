import {
  ChatState,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  FORBIDDEN_WORD,
  ChatActionTypes
} from "./types";

const initialState: ChatState = {
  messages: [],
  forbiddenWord: false
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        forbiddenWord: false,
        messages: [...state.messages, action.payload]
      };
    case FORBIDDEN_WORD:
      return {
        ...state,
        forbiddenWord: true
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      };

    default:
      return state;
  }
}
