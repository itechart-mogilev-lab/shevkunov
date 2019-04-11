import { combineReducers } from "redux";
import errorReducer from "./ErrorReducer";
import authReducer from "./AuthReducer";
import companyReducer from "./CompanyReducer";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  companiesList: companyReducer
});
