import { connect } from "react-redux";
import { registerCompany } from "../../actions/authActions";
import RegisterCompanyFormik from "../../components/Auth/RegisterCompany/RegisterCompanyFormik";

const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		registerCompany: (company, history) => {
			dispatch(registerCompany(company, history));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterCompanyFormik);