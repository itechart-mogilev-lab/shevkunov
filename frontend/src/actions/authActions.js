import axios from "axios";
import * as act from "./actionTypes";
import setAuthToken from "../helpers/setAuthToken";
import { storeToken, clearToken } from "../helpers/authFromLocalStorage";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/auth/register", user)
    .then(res => {
      const { verifyToken } = res.data;
      localStorage.setItem("verifyToken", verifyToken);
      setAuthToken(verifyToken);
      dispatch(resetErrors());
      history.push("/confirmation");
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const registerCompany = (company, history) => dispatch => {
  axios
    .post("/api/auth/register/company", company)
    .then(res => {
      const { verifyToken } = res.data;
      localStorage.setItem("verifyToken", verifyToken);
      setAuthToken(verifyToken);
      dispatch(resetErrors());
      history.push("/confirmation");
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export function loginSuccess(user) {
  return {
    type: act.LOGIN_SUCCESS,
    payload: {
      profile: user
    }
  };
}

export function resetErrors() {
  return {
    type: act.RESET_ERRORS
  };
}

export const loginUser = (user, history) => dispatch => {
  axios
    .post("/api/auth/login", user)
    .then(res => {
      const { token, ...user } = res.data;
      //console.log(user);
      storeToken(token, user);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(loginSuccess(user));
      dispatch(resetErrors());
      history.push("/profile");
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const googleLogin = history => dispatch => {
  axios.get("/api/auth/google").then(res => {
    window.location = res.request.responseURL;
  });
};

export const verifyUser = (confirmationCode, history) => dispatch => {
  const token = localStorage.getItem("verifyToken");
  setAuthToken(token);
  axios
    .post("/api/auth/confirmation", confirmationCode)

    .then(() => {
      dispatch(resetErrors());
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: act.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logoutUser = history => dispatch => {
  clearToken();
  setAuthToken(false);
  resetErrors();
  dispatch(setCurrentUser({}));
  history.push("/login");
};

export const setCurrentUser = decoded => {
  return {
    type: act.SET_CURRENT_USER,
    payload: decoded
  };
};
