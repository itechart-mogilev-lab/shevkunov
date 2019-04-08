import { USER_GET_SUCCESS, GET_ERRORS } from "./actionTypes";
import axios from "axios";
import { push } from "connected-react-router";

export const getProfileSuccess = profile => {
	return {
		type: USER_GET_SUCCESS,
		payload: {
			profile
		}
	};
};

var config = {
	headers: { Authorization: "bearer " + localStorage.getItem("jwtToken") }
};

export const getCurrentProfile = history => dispatch => {
	axios
		.get("/api/auth/current", config)
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
