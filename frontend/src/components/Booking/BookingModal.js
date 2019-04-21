import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import { countPrice, countTime } from "../../helpers/countPrice";

const styles = theme => ({
  main: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  grid: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  services: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    width: "180px"
  },
  smallBtn: {
    marginTop: "20px",
    width: "100%",
    maxWidth: "360px",
    margin: "auto"
  }
});

const BookingModal = props => {
  const {
    closeModal,
    confirmAction,
    classes,
    values,
    company,
    disagree,
    open
  } = props;
  const price = countPrice(
    company.services,
    values.service,
    company.rooms,
    values.roomsCount
  );
  const time = countTime(
    company.services,
    values.service,
    company.rooms,
    values.roomsCount
  );
  const newValues = { company: company._id, ...values };
  //console.log(newValues);
  return (
    <Dialog
      open={true}
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
            id="company"
            label="Company name"
            value={company.name}
            fullWidth
          />
        </FormControl>
        <FormControl margin="normal" fullWidth required>
          <TextField
            disabled
            margin="dense"
            id="address"
            label="Address"
            value={values.address}
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
            fullWidth
          />
        </FormControl>
        <div className={classes.grid}>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="roomsCount.standart"
              label="Standart"
              value={values.roomsCount.standart}
              fullWidth
            />
          </FormControl>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="roomsCount.big"
              label="Big"
              value={values.roomsCount.big}
              fullWidth
            />
          </FormControl>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="roomsCount.toilet"
              label="Toilet"
              value={values.roomsCount.toilet}
              fullWidth
            />
          </FormControl>
        </div>
        <div className={classes.grid}>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="date"
              label="Date"
              value={values.date}
              fullWidth
            />
          </FormControl>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="startTime"
              label="Start time"
              value={values.startTime}
              fullWidth
            />
          </FormControl>
        </div>
        <FormControl margin="normal" fullWidth required>
          <TextField
            disabled
            margin="dense"
            id="regularity"
            label="Regularity"
            value={values.regularity}
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
              fullWidth
            />
          </FormControl>
        )}
        <div className={classes.grid}>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="price"
              label="Price"
              value={price}
              fullWidth
            />
          </FormControl>
          <FormControl margin="normal" required>
            <TextField
              disabled
              margin="dense"
              id="time"
              label="Time"
              value={time}
              fullWidth
            />
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={disagree} color="primary">
          Disagree
        </Button>
        <Button
          onClick={() => confirmAction(newValues)}
          color="primary"
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(BookingModal);
