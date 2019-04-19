import { connect } from "react-redux";
import { createReview } from "../../actions/companyActions";
import CompaniesPageComponent from "../../components/Companies/CompaniesPage";

const mapStateToProps = state => ({
	company: state.detail.company,
	errorMessage: state.errors.errorMessage
});

const mapDispatchToProps = dispatch => {
	return {
		createReview: review => {
			dispatch(createReview(review));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CompaniesPageComponent);
