import { SEND_MESSAGE, ChatActionTypes } from "../store/chat/types";
import { forbiddenWord } from "../store/chat/actions";

const forbiddenWords = ["fuck", "bitch"];

export const forbiddenWordsMiddleware = ({ dispatch }: any) => (
  next: Function
) => (action: ChatActionTypes) => {
  if (action.type === SEND_MESSAGE) {
    const foundWord = forbiddenWords.filter(word =>
      action.payload.message.includes(word)
    );
    if (foundWord.length) return dispatch(forbiddenWord());
  }
  return next(action);
};
