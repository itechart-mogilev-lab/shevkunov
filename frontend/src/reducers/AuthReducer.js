import {
	SET_CURRENT_USER,
	USER_GET_SUCCESS,
	LOGIN_SUCCESS
} from "../actions/actionTypes";
import isEmpty from "../validations/isEmpty";

const initialState = {
	isAuthenticated: false,
	user: {},
	profile: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		// case SET_CURRENT_USER:
		// 	return {
		// 		...state,
		// 		isAuthenticated: !isEmpty(action.payload),
		// 		user: action.payload
		// 	};
		case USER_GET_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				profile: action.payload.profile
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				profile: action.payload.profile
			};
		default:
			return state;
	}
}
