import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import LoginComponent from "../../components/Auth/SignIn/SignInFormik";

const mapStateToProps = state => ({
	errorMessage: state.errors.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loginUser: (user, history) => {
			dispatch(loginUser(user, history));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);
