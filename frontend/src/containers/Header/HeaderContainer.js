import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import HeaderComponent from "../../components/Header/HeaderComponent";

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logoutUser: history => {
			dispatch(logoutUser(history));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderComponent);
