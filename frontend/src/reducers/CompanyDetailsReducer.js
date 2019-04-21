import * as act from "../actions/actionTypes";

const initialState = {
  details: {
    data: null,
    meta: {
      loading: false,
      loaded: false,
      error: false
    }
  },
  reviews: {
    docs: [],
    meta: {
      loading: false
    },
    total: 0,
    page: 1,
    pages: 1
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case act.REQUEST_COMPANY_DETAILS: {
      return {
        details: {
          data: state.details.data,
          meta: {
            ...state.meta,
            loading: true
          }
        },
        reviews: state.reviews
      };
    }
    case act.GET_COMPANY_DETAILS: {
      return {
        details: {
          data: action.payload,
          meta: {
            loading: false,
            loaded: true,
            error: false
          }
        },
        reviews: state.reviews
      };
    }
    case act.GET_COMPANY_REVIEWS_SUCCESS: {
      return {
        details: state.details,
        reviews: {
          docs: [...state.reviews.docs, ...action.payload.docs],
          page: state.reviews.page + 1,
          total: action.payload.total,
          pages: action.payload.pages
        }
      };
    }
    case act.GET_COMPANY_REVIEWS: {
      return {
        details: state.details,
        reviews: {
          ...state.reviews,
          loading: true
        }
      };
    }
    case act.RESET_COMPANY_REVIEWS: {
      return {
        details: state.details,
        reviews: initialState.reviews
      };
    }
    default:
      return state;
  }
}
