// Describing the shape of the chat's slice of state
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  forbiddenWord: boolean;
}

// Describing the different ACTION NAMES available
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_ASYNC_MESSAGE = "SEND_ASYNC_MESSAGE";
export const FORBIDDEN_WORD = "FORBIDDEN_WORD";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface SendAsyncMessageAction {
  type: typeof SEND_ASYNC_MESSAGE;
  payload: string;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

interface ForbiddenWordAction {
  type: typeof FORBIDDEN_WORD;
}

export type ChatActionTypes =
  | SendAsyncMessageAction
  | SendMessageAction
  | DeleteMessageAction
  | ForbiddenWordAction;
