import { SAVE_ORDER, SET_COMPANY } from "./actionTypes";

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
