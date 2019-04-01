import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import LoginComponent from "../../components/Auth/SignInComponent";

const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loginUser: user => {
			dispatch(loginUser(user));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);
