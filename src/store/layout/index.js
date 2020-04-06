const INITIAL_STATE = {
  showMessage: false,
};

//reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SHOW_MESSAGE:
      return { ...state, showMessage: true };
    case Types.HIDE_MESSAGE:
      return { ...state, showMessage: false };
    default:
      return state;
  }
};

//action types
export const Types = {
  SHOW_MESSAGE: "SHOW_MESSAGE",
  HIDE_MESSAGE: "HIDE_MESSAGE",
};

//action creators
export const Creators = {
  showMessage: () => ({ type: Types.SHOW_MESSAGE }),
  hideMessage: () => ({ type: Types.HIDE_MESSAGE }),
};

// //actions
// export const showMessage = () => {
//   return {
//     type: "SHOW_MESSAGE",
//   };
// };

// export const hideMessage = () => {
//   return {
//     type: "HIDE_MESSAGE",
//   };
// };
