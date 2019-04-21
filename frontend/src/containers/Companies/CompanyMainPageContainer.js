import { connect } from "react-redux";
import {
  getCompanyDetails,
  getCompanyReviews,
  resetCompanyReviews
} from "../../actions/companyActions";
import { openReviewModal } from "../../actions/modalActions";
import { setCompany } from "../../actions/bookingActions";
import CompanyMainPage from "../../components/Companies/CompanyMainPage";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  company: state.company.details.data,
  reviews: state.company.reviews
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCompany: company => dispatch(setCompany(company)),
    getCompanyDetails: id => dispatch(getCompanyDetails(id)),
    getCompanyReviews: (id, queries) =>
      dispatch(getCompanyReviews(id, queries)),
    openReviewModal: () => dispatch(openReviewModal()),
    resetCompanyReviews: () => dispatch(resetCompanyReviews())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyMainPage));
