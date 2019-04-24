import { COMPANIES_LOAD_SUCCESS } from "../actions/actionTypes";

const initialState = {
  docs: [],
  total: 0,
  page: 1,
  pages: 0,
  limit: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMPANIES_LOAD_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}
