import {
  ORDERS_LOAD_SUCCESS,
  ORDERS_REQUEST,
  GET_ERRORS,
  RESET_ORDERS
} from "./actionTypes";
import axios from "axios";

export const getOrdersSuccess = data => {
  return {
    type: ORDERS_LOAD_SUCCESS,
    payload: data
  };
};

const requestOrders = () => {
  return {
    type: ORDERS_REQUEST
  };
};

export const getOrders = query => dispatch => {
  dispatch(requestOrders());
  axios
    .get(`/api/orders/${query || ""}`)
    .then(response => {
      dispatch(getOrdersSuccess(response.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
      dispatch({
        type: RESET_ORDERS
      });
    });
};

export const acceptOrder = id => dispatch => {
  axios
    .put(`/api/orders/${id}/accept`, id)
    .then(dispatch(getOrders()))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
    });
};

export const rejectOrder = id => dispatch => {
  axios
    .put(`/api/orders/${id}/reject`, id)
    .then(dispatch(getOrders()))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
    });
};
