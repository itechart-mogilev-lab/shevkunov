import {
  SAVE_ORDER,
  SET_COMPANY,
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  GET_ERRORS,
  DELETE_ORDER
} from "./actionTypes";
import { hideModal } from "./modalActions";
import axios from "axios";

export const saveOrder = values => {
  return {
    type: SAVE_ORDER,
    payload: values
  };
};

export const setCompany = company => {
  return {
    type: SET_COMPANY,
    payload: company
  };
};

export const sendOrder = values => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: SEND_ORDER
  });
  axios
    .post("/api/orders", { customer: state.auth.profile, ...values })
    .then(res => {
      dispatch({
        type: SEND_ORDER_SUCCESS
      });
      dispatch(hideModal());
      dispatch(deleteOrder());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const deleteOrder = () => {
  return {
    type: DELETE_ORDER
  };
};
