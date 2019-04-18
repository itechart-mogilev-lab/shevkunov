import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, LOGIN_SUCCESS } from "./actionTypes";
import setAuthToken from "../helpers/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/auth/register", user)
    .then(res => {
      const { verifyToken } = res.data;
      localStorage.setItem("verifyToken", verifyToken);
      setAuthToken(verifyToken);
      history.push("/confirmation");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
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
      history.push("/confirmation");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      profile: user
    }
  };
}

export const loginUser = (user, history) => dispatch => {
  axios
    .post("/api/auth/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(loginSuccess(res.data));
      history.push("/profile");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
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
    .then(history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
