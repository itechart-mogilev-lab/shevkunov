import { connect } from "react-redux";
import { createReview } from "../../actions/companyActions";
import { closeReviewModal } from "../../actions/modalActions";
import ReviewsFormik from "../../components/Companies/Reviews/ReviewsFormik";

const mapStateToProps = state => ({
  company: state.company.details.data,
  errorMessage: state.errors.errorMessage,
  open: state.modal.showReview
});

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => {
      dispatch(createReview(review));
    },
    closeReviewModal: () => dispatch(closeReviewModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsFormik);
