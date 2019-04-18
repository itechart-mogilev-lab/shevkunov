import {
  ORDERS_LOAD_SUCCESS,
  ORDERS_REQUEST,
  GET_ORDERS_ERRORS
} from "../actions/actionTypes";

const initialState = {
  docs: [],
  total: 0,
  page: 1,
  pages: 0,
  limit: 10,
  meta: {
    loading: false,
    loaded: false,
    error: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDERS_LOAD_SUCCESS: {
      const { docs, total, page, pages, limit } = action.payload;
      return {
        docs,
        total,
        page,
        pages,
        limit,
        meta: {
          loading: false,
          loaded: true,
          error: false
        }
      };
    }
    case ORDERS_REQUEST: {
      return {
        ...initialState,
        meta: {
          loading: true,
          loaded: false,
          error: false
        }
      };
    }
    case GET_ORDERS_ERRORS: {
      return {
        ...initialState,
        meta: {
          loading: false,
          loaded: false,
          error: true
        }
      };
    }
    default:
      return state;
  }
}
