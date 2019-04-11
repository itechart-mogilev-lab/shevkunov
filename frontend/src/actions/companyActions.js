import { COMPANIES_LOAD_SUCCESS, GET_ERRORS } from "./actionTypes";
import axios from "axios";

export const getCompaniesListSuccess = ({
  docs: companies,
  total,
  page,
  pages,
  limit
}) => {
  return {
    type: COMPANIES_LOAD_SUCCESS,
    payload: {
      companies,
      total,
      page,
      pages,
      limit
    }
  };
};

export const getCompaniesList = page => {
  axios
    .get(`/api/companies/${page}`)
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
