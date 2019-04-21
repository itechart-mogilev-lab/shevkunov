import { combineReducers } from "redux";
import errorReducer from "./ErrorReducer";
import authReducer from "./AuthReducer";
import companyReducer from "./CompanyReducer";
import bookingReducer from "./BookingReducer";
import modalReducer from "./ModalReducer";
import ordersReducer from "./OrdersReducer";
import companyDetailsReducer from "./CompanyDetailsReducer";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  companiesList: companyReducer,
  booking: bookingReducer,
  modal: modalReducer,
  ordersList: ordersReducer,
  company: companyDetailsReducer
});
