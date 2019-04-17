import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import BookingModal from "../../components/Booking/BookingModal";
import { hideModal } from "../../actions/modalActions";

const mapStateToProps = state => ({
  open: state.modal.show,
  values: state.booking.order,
  company: state.booking.company
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(hideModal())
});

class ModalContainer extends React.Component {
  render() {
    console.log("PROPS_MODAL_CONTAINER:", this.props);
    if (!this.props.open) return null;
    return (
      <div>
        <BookingModal
          closeModal={this.props.closeModal}
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
