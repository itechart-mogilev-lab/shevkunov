import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/userActions";
import ProfilePageComponent from "../../components/Profile/ProfileComponent";

const mapStateToProps = state => ({
	user: state.auth.profile
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getCurrentUser: history => {
			dispatch(getCurrentProfile());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePageComponent);
