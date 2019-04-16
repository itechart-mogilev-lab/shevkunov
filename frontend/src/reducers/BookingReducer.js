import { SAVE_ORDER, SET_COMPANY } from "../actions/actionTypes";

const initialState = {
  company: null,
  order: null
};

export default function(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case SAVE_ORDER:
      return { order: payload, company: state.company };
    case SET_COMPANY:
      return { order: state.order, company: payload };
    default:
      return state;
  }
}
