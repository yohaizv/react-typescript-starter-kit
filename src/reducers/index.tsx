import { ADD_MESSAGE } from "../actions";

const initialState = {
  messages: [
    {
      id: 1,
      title: "Title a 1"
    }
  ]
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: state.messages.concat({
          id: Math.max.apply(Math, state.messages.map(m => m.id)) + 1,
          title: action.payload
        })
      });
    default:
      return state;
  }
}

export default rootReducer;
