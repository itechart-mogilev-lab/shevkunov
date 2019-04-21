import * as act from "./actionTypes";

export const showModal = () => dispatch => {
  dispatch({
    type: act.SHOW_MODAL
  });
};

export const hideModal = () => dispatch => {
  dispatch({
    type: act.HIDE_MODAL
  });
};

export const openReviewModal = () => {
  return {
    type: act.OPEN_REVIEW_MODAL
  };
};

export const closeReviewModal = () => {
  return {
    type: act.HIDE_REVIEW_MODAL
  };
};
