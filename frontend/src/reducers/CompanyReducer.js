import { COMPANIES_LOAD_SUCCESS } from "../actions/actionTypes";

const initialState = {
  companies: [],
  total: 0,
  page: 1,
  pages: 0,
  limit: 10
};

export default function(state = initialState, action) {
  const { companies, total, page, pages, limit } = action.payload;
  switch (action.type) {
    case COMPANIES_LOAD_SUCCESS: {
      return {
        companies,
        total,
        page,
        pages,
        limit
      };
    }
    default:
      return state;
  }
}
