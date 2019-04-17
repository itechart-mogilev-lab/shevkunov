import { HIDE_MODAL, SHOW_MODAL } from "../actions/actionTypes";

const initialState = {
  modalProps: {
    show: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
