export const ADD_MESSAGE = "ADD_MESSAGE";

export function addMessage(payload: string) {
  return {
    type: ADD_MESSAGE,
    payload
  };
}
