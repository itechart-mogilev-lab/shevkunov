import { connect } from "react-redux";
import { saveOrder } from "../../actions/bookingActions";
import { showModal } from "../../actions/modalActions";
import BookingComponent from "../../components/Booking/BookingFormik";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  company: state.booking.company,
  order: state.booking.order
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveOrders: values => {
      dispatch(saveOrder(values));
    },
    showModal: values => {
      dispatch(showModal(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BookingComponent));
