import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import RegisterUserFormik from "../../components/Auth/RegisterUser/RegisterUserFormik";

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUser: (user, history) => {
      dispatch(registerUser(user, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUserFormik);
