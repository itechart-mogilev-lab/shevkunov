import { USER_GET_SUCCESS, GET_ERRORS } from "./actionTypes";
import axios from "axios";

export const getProfileSuccess = profile => {
	return {
		type: USER_GET_SUCCESS,
		payload: {
			profile
		}
	};
};


export const getCurrentProfile = history => dispatch => {
	axios
		.get("/api/auth/current")
		.then(response => {
			if (response.status !== 401) {
				console.log("profile success");
				dispatch(getProfileSuccess(response.data));
			} else {
				history.push("/login");
			}
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};
