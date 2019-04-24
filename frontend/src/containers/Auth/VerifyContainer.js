import { connect } from "react-redux";
import { verifyUser } from "../../actions/authActions";
import VerifyComponent from "../../components/Auth/VerifyComponent";

const mapStateToProps = state => ({
	errorMessage: state.errors.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		verifyUser: (confirmationCode, history) => {
			dispatch(verifyUser(confirmationCode, history));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VerifyComponent);
