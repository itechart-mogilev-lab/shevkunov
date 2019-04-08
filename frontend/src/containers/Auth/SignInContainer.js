import { connect } from "react-redux";
import { loginUser, googleLogin } from "../../actions/authActions";
import LoginComponent from "../../components/Auth/SignInComponent";

const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loginUser: (user, history) => {
			dispatch(loginUser(user, history));
		},
		googleLogin: history => {
			dispatch(googleLogin());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);
