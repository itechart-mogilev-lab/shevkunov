import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { red } from "@material-ui/core/colors";

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
    justifyContent: "space-evenly"
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  error: {
    color: red
  }
});

function RegisterForm(props) {
  const {
    classes,
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  function isAdressError(value) {
    const address = touched.address;
    const addressError = errors.address;
    return (
      address &&
      address[value] &&
      Boolean(addressError) &&
      Boolean(addressError[value])
    );
  }
  function isRoomError(roomName, value) {
    const room = touched[roomName];
    const roomError = errors[roomName];
    return (
      room && room[value] && Boolean(roomError) && Boolean(roomError[value])
    );
  }
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.grid}>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={touched.name && Boolean(errors.name)}
              />
            </FormControl>
            <FormControl margin="normal">
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
              />
            </FormControl>
          </div>
          <FormControl
            margin="normal"
            required
            fullWidth
            className={classes.formControl}
          >
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth
            className={classes.formControl}
          >
            <InputLabel htmlFor="address.city">City</InputLabel>
            <Input
              name="address.city"
              onChange={handleChange}
              onBlur={handleBlur}
              error={isAdressError("city")}
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth
            className={classes.formControl}
          >
            <InputLabel htmlFor="address.country">Country</InputLabel>
            <Input
              name="address.country"
              onChange={handleChange}
              onBlur={handleBlur}
              error={isAdressError("country")}
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth
            className={classes.formControl}
          >
            <InputLabel htmlFor="address.other">Other</InputLabel>
            <Input
              name="address.other"
              onChange={handleChange}
              onBlur={handleBlur}
              error={isAdressError("other")}
            />
          </FormControl>
          <div className={classes.grid}>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
              />
            </FormControl>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="confirmPassword">
                Confirm password
              </InputLabel>
              <Input
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
              />
            </FormControl>
          </div>
          <p className={classes.formTitle}>Rooms</p>
          <p className={classes.formTitle}>Toilet</p>
          <div className={classes.grid}>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="toilet.price">Toilet price</InputLabel>
              <Input
                name="toilet.price"
                onChange={handleChange}
                onBlur={handleBlur}
                error={isRoomError("toilet", "price")}
              />
            </FormControl>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="toilet.time">Toilet time</InputLabel>
              <Input
                name="toilet.time"
                onChange={handleChange}
                onBlur={handleBlur}
                error={isRoomError("toilet", "time")}
              />
            </FormControl>
          </div>
          <p className={classes.formTitle}>Standart room</p>
          <div className={classes.grid}>
            <FormControl
              margin="normal"
              required
              className={classes.formControl}
            >
              <InputLabel htmlFor="standart.price">Standart price</InputLabel>
              <Input
                name="standart.price"
                onChange={handleChange}
                onBlur={handleBlur}
                error={isRoomError("standart", "price")}
              />
            </FormControl>
            <FormControl
              margin="normal"
              required
              className={classes.formControl}
            >
              <InputLabel htmlFor="standart.time">Standart time</InputLabel>
              <Input
                name="standart.time"
                onChange={handleChange}
                onBlur={handleBlur}
                error={isRoomError("standart", "time")}
              />
            </FormControl>
          </div>
          <p className={classes.formTitle}>Big room</p>
          <div className={classes.grid}>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="big.price">Big price</InputLabel>
              <Input
                name="big.price"
                onChange={handleChange}
                onBlur={handleBlur}
                error={isRoomError("big", "price")}
              />
            </FormControl>
            <FormControl margin="normal" required>
              <InputLabel htmlFor="big.time">Big time</InputLabel>
              <Input
                name="big.time"
                onChange={handleChange}
                onBlur={handleBlur}
                error={isRoomError("big", "time")}
              />
            </FormControl>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </Paper>
    </main>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
