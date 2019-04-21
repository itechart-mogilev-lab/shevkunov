import { connect } from "react-redux";
import { saveCompanyChanges, saveUserChanges } from "../../actions/userActions";
import EditPage from "../../components/Profile/Edit/EditPage";

const mapStateToProps = state => ({
	profile: state.auth.profile,
	role: state.auth.profile.role,
	errorMessage: state.errors.errorMessage
});

const mapDispatchToProps = dispatch => {
	return {
		saveChanges: (newProfile, role) => {
			if (role === "company") dispatch(saveCompanyChanges(newProfile));
			else dispatch(saveUserChanges(newProfile));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditPage);
