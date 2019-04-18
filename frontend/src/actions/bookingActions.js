import {
  SAVE_ORDER,
  SET_COMPANY,
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  GET_ERRORS,
  DELETE_ORDER
} from "./actionTypes";
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

export const sendOrder = values => dispatch => {
  dispatch({
    type: SEND_ORDER
  });
  axios
    .post("/api/orders", values)
    .then(
      dispatch({
        type: SEND_ORDER_SUCCESS
      })
    )
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
