import { HIDE_MODAL, SHOW_MODAL } from "./actionTypes";

export const showModal = ({ ...modalProps }) => dispatch => {
	dispatch({
		type: SHOW_MODAL,
		modalProps
	});
};

export const hideModal = () => dispatch => {
	dispatch({
		type: HIDE_MODAL
	});
};
