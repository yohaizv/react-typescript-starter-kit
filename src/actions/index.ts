export const ADD_MESSAGE = "ADD_MESSAGE";
export const FOUND_BAD_WORD = "FOUND_BAD_WORD";
export const DATA_REQUESTED = "DATA_REQUESTED";
export const DATA_LOADED = "DATA_LOADED";
export const API_ERROR = "API_ERROR";

export function addMessage(payload: string) {
  return {
    type: ADD_MESSAGE,
    payload
  };
}
export function getData() {
  return {
    type: DATA_REQUESTED
  };
}
