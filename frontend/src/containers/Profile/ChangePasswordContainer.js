import { connect } from "react-redux";
import { saveCompanyChanges, saveUserChanges } from "../../actions/userActions";
import ChangePassword from "../../components/Profile/Edit/Password/ChangePasswordFormik";

const mapStateToProps = state => ({
  role: state.auth.profile.role,
  errorMessage: state.errors.errorMessage
});

const mapDispatchToProps = dispatch => {
  return {
    saveChanges: (creds, role) => {
      if (role === "company") dispatch(saveCompanyChanges(creds));
      else dispatch(saveUserChanges(creds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
