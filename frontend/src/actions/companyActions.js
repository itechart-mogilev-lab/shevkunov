import * as act from "./actionTypes";
import axios from "axios";
import { closeReviewModal } from "./modalActions";

export const getCompaniesListSuccess = data => {
  return {
    type: act.COMPANIES_LOAD_SUCCESS,
    payload: { ...data }
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
        type: act.GET_ERRORS,
        payload: err.response
      });
    });
};

export const getCompanyDetails = id => dispatch => {
  dispatch(requestCompanyDetails());
  axios
    .get(`/api/companies/${id}`)
    .then(response => {
      dispatch(getCompanyDetailsSuccess(response.data));
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response
      });
    });
};

export const getCompanyReviews = id => (dispatch, getState) => {
  const state = getState();
  const page = state.company.reviews.page;
  const pages = state.company.reviews.pages;
  if (page > pages) return;
  dispatch(requestCompanyReviews());
  axios
    .get(`/api/reviews/${id}?page=${page}`)
    .then(response => {
      dispatch(getCompanyReviewsSuccess(response.data));
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response
      });
    });
};

const requestCompanyDetails = () => {
  return {
    type: act.REQUEST_COMPANY_DETAILS
  };
};

const getCompanyDetailsSuccess = data => {
  return {
    type: act.GET_COMPANY_DETAILS,
    payload: data
  };
};

const requestCompanyReviews = data => {
  return {
    type: act.GET_COMPANY_REVIEWS,
    payload: data
  };
};

const getCompanyReviewsSuccess = data => {
  return {
    type: act.GET_COMPANY_REVIEWS_SUCCESS,
    payload: data
  };
};

export const resetCompanyReviews = () => {
  return { type: act.RESET_COMPANY_REVIEWS };
};

export const createReview = review => dispatch => {
  axios
    .post("/api/reviews/", review)
    .then(() => {
      dispatch({
        type: act.CREATE_REVIEW_SUCCESS
      });
      dispatch(closeReviewModal());
      dispatch(resetCompanyReviews());
      dispatch(getCompanyReviews(review.company));
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response
      });
    });
};
