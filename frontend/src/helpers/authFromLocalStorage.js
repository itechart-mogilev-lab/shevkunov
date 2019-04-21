import { loginSuccess } from "../actions/authActions";
import { getCurrentProfile } from "../actions/userActions";
import setAuthToken from "../helpers/setAuthToken";

const AUTH_TOKEN_KEY = "jwtToken";
const USER_KEY = "user";

export const initializePreviousToken = async store => {
  const tokens = localStorage.getItem(AUTH_TOKEN_KEY);
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  if (tokens) {
    setAuthToken(tokens);
    await store.dispatch(loginSuccess(user));
    store.dispatch(getCurrentProfile());
  }
};

export const storeToken = (token, user) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};
