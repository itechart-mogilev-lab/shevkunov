import {
  HIDE_MODAL,
  SHOW_MODAL,
  OPEN_REVIEW_MODAL,
  HIDE_REVIEW_MODAL
} from "../actions/actionTypes";

const initialState = {
  showBooking: false,
  showReview: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showBooking: true };
    case HIDE_MODAL:
      return { ...state, showBooking: false };
    case OPEN_REVIEW_MODAL:
      return { ...state, showReview: true };
    case HIDE_REVIEW_MODAL:
      return { ...state, showReview: false };
    default:
      return state;
  }
};
