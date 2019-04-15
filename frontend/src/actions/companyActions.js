import { COMPANIES_LOAD_SUCCESS, GET_ERRORS } from "./actionTypes";
import axios from "axios";

export const getCompaniesListSuccess = ({
  docs,
  total,
  page,
  pages,
  limit
}) => {
  return {
    type: COMPANIES_LOAD_SUCCESS,
    payload: {
      docs,
      total,
      page,
      pages,
      limit
    }
  };
};

export const getCompaniesList = queires => dispatch => {
  axios
    .get(`/api/companies/${queires}`)
    .then(response => {
      dispatch(getCompaniesListSuccess(response.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
    });
};
