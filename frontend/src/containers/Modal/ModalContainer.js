import React from "react";
import { connect } from "react-redux";
import BookingModal from "../../components/Booking/BookingModal";
import { hideModal } from "../../actions/modalActions";
import { sendOrder, deleteOrder } from "../../actions/bookingActions";

const mapStateToProps = state => ({
  open: state.modal.showBooking,
  values: state.booking.order,
  company: state.booking.company
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    dispatch(hideModal());
  },
  disagree: () => {
    dispatch(deleteOrder());
    dispatch(hideModal());
  },
  confirmAction: values => {
    dispatch(sendOrder(values));
  }
});

class ModalContainer extends React.Component {
  render() {
    if (!this.props.open) return null;
    return (
      <BookingModal
        open={this.props.open}
        closeModal={this.props.closeModal}
        disagree={this.props.disagree}
        confirmAction={this.props.confirmAction}
        company={this.props.company}
        values={this.props.values}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
