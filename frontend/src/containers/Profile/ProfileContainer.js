import { connect } from "react-redux";
//import { getCurrentProfile } from "../../actions/userActions";
import ProfilePageComponent from "../../components/Profile/ProfilePage";

const mapStateToProps = state => ({
	profile: state.auth.profile
});

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     getCurrentUser: history => {
//       dispatch(getCurrentProfile());
//     }
//   };
// };

export default connect(
	mapStateToProps,
	null
)(ProfilePageComponent);
