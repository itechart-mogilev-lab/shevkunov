import { GET_ERRORS, RESET_ERRORS } from "../actions/actionTypes";

const initialState = {
  errorMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        errorMessage:
          action.payload.statusText || action.payload || "Something went wrong."
      };
    case RESET_ERRORS:
      return { errorMessage: "" };
    default:
      return state;
  }
}
