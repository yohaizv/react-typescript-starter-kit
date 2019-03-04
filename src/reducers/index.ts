import { ADD_MESSAGE, FOUND_BAD_WORD, DATA_LOADED } from "../actions";

const initialState = {
  forbiddenWordFound: false,
  messages: [
    {
      id: 1,
      title: "Title a 1"
    }
  ],
  remoteMessages: []
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({
          id: Math.max.apply(Math, state.messages.map(m => m.id)) + 1,
          title: action.payload
        }),
        forbiddenWordFound: false
      };

    case FOUND_BAD_WORD:
      return {
        ...state,
        forbiddenWordFound: true
      };
    case DATA_LOADED:
      return {
        ...state,
        remoteMessages: state.remoteMessages.concat(action.payload)
      };
    default:
      return state;
  }
}

export default rootReducer;
