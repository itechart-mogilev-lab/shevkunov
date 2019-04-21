import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Rating from "react-rating";
import withStyles from "@material-ui/core/styles/withStyles";
import ErrorSnackbar from "../../common/ErrorSnackbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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
  submit: {
    marginTop: theme.spacing.unit * 3
  }
  // error: {
  //     color: red
  // }
});

function ReviewForm(props) {
  const {
    classes,
    errors,
    values,
    errorMessage,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please give a review and rating of the company
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {errorMessage && (
            <ErrorSnackbar
              variant="error"
              className={classes.margin}
              message={errorMessage}
            />
          )}
          <Rating
            name="rating"
            emptySymbol={<FontAwesomeIcon icon={faStar} color="grey" />}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="yellow" />}
            initialRating={values.rating}
            onChange={value => setFieldValue("rating", value)}
          />
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="reviewText">Review text</InputLabel>
            <Input
              id="reviewText"
              name="reviewText"
              autoComplete="reviewText"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.reviewText && Boolean(errors.reviewText)}
              autoFocus
            />
            {Boolean(errors.reviewText) && (
              <FormHelperText id="component-error-text">
                {errors.reviewText}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(ReviewForm);
