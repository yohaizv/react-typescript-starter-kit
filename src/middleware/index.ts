import { ADD_MESSAGE } from "../actions";
const forbiddenWords = ["fuck", "bitch"];

export const forbiddenWordsMiddleware = ({ dispatch }: any) => (
  next: Function
) => (action: any) => {
  if (action.type === ADD_MESSAGE) {
    const foundWord = forbiddenWords.filter(word =>
      action.payload.includes(word)
    );
    if (foundWord.length) return dispatch({ type: "FOUND_BAD_WORD" });
  }
  return next(action);
};
