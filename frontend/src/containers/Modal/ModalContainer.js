import React from "react";
import { connect } from "react-redux";
import BookingModal from "../../components/Booking/BookingModal";
import { hideModal } from "../../actions/modalActions";
import { sendOrder, deleteOrder } from "../../actions/bookingActions";

const mapStateToProps = state => ({
  open: state.modal.show,
  values: state.booking.order,
  company: state.booking.company
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    dispatch(deleteOrder());
    dispatch(hideModal());
  },
  confirmAction: values => {
    dispatch(sendOrder(values));
    dispatch(deleteOrder());
    dispatch(hideModal());
  }
});

class ModalContainer extends React.Component {
  render() {
    if (!this.props.open) return null;
    return (
      <div>
        <BookingModal
          closeModal={this.props.closeModal}
          confirmAction={this.props.confirmAction}
          company={this.props.company}
          values={this.props.values}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
