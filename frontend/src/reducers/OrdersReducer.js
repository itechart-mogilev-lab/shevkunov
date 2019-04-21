import {
  ORDERS_LOAD_SUCCESS,
  ORDERS_REQUEST,
  RESET_ORDERS
} from "../actions/actionTypes";

const initialState = {
  docs: [],
  total: 0,
  page: 1,
  pages: 1,
  meta: {
    loading: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDERS_LOAD_SUCCESS: {
      return {
        docs: action.payload.docs,
        total: action.payload.total,
        page: action.payload.page,
        pages: action.payload.pages,
        meta: {
          loading: false
        }
      };
    }
    case ORDERS_REQUEST: {
      return {
        ...state,
        meta: {
          loading: true
        }
      };
    }
    case RESET_ORDERS: {
      return initialState;
    }
    default:
      return state;
  }
}
