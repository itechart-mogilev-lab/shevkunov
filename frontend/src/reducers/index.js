import { combineReducers } from "redux";
import errorReducer from "./ErrorReducer";
import authReducer from "./AuthReducer";
import companyReducer from "./CompanyReducer";
import orderReducer from "./BookingReducer";
import modalReducer from "./ModalReducer";

export default combineReducers({
	errors: errorReducer,
	auth: authReducer,
	companiesList: companyReducer,
	booking: orderReducer,
	modal: modalReducer
});
