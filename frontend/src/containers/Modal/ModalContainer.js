import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import BookingModal from "../../components/Booking/BookingModal";
import { hideModal } from "../../actions/modalActions";

const mapStateToProps = state => ({
	...state.modal
});

class ModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: this.props.modalProps.open
		};
		this.closeModal = this.closeModal.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			this.setState({
				modalIsOpen: nextProps.modalProps.open
			});
		}
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
		this.props.history.goBack();
	}

	render() {
		console.log("PROPS_MODAL_CONTAINER:", this.props);
		return (
			<div>
				<BookingModal
					closeModal={this.closeModal}
					modalIsOpen={this.state.modalIsOpen}
					{...this.props.modalProps}
				/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(ModalContainer);
