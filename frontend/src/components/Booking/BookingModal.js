import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const BookingModal = props => {
	console.log(props);
	const { closeModal, modalIsOpen, confirmAction, ...values } = props;
	return (
		<Dialog
			open={modalIsOpen}
			onClose={closeModal}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{"Confirm your order"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Confirm your information for booking
				</DialogContentText>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="address"
						label="Address"
						value={values.address}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="service"
						label="Service"
						value={values.service}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="roomsCount.standart"
						label="Standart"
						value={values.roomsCount.standart}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="roomsCount.big"
						label="Big"
						value={values.roomsCount.big}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="roomsCount.toilet"
						label="Big"
						value={values.roomsCount.toilet}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="date"
						label="Date"
						value={values.date}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="startTime"
						label="Start time"
						value={values.startTime}
						type="email"
						fullWidth
					/>
				</FormControl>
				<FormControl margin="normal" fullWidth required>
					<TextField
						disabled
						margin="dense"
						id="regularity"
						label="Regularity"
						value={values.regularity}
						type="email"
						fullWidth
					/>
				</FormControl>
				{values.regularity && values.regularity !== "One time" && (
					<FormControl margin="normal" fullWidth required>
						<TextField
							disabled
							margin="dense"
							id="regularity"
							label="Duration"
							value={values.duration}
							type="email"
							fullWidth
						/>
					</FormControl>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={closeModal} color="primary">
					Disagree
				</Button>
				<Button onClick={confirmAction} color="primary" autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default BookingModal;
