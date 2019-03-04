export const ADD_MESSAGE = "ADD_MESSAGE";
export const FOUND_BAD_WORD = "FOUND_BAD_WORD";

export function addMessage(payload: string) {
  return {
    type: ADD_MESSAGE,
    payload
  };
}
