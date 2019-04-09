import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles";

function SignInForm(props) {
  const {
    classes,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          autoFocus
        />
        {Boolean(errors.email) && (
          <FormHelperText id="component-error-text">
            {errors.email}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
        />
        {Boolean(errors.email) && (
          <FormHelperText id="component-error-text">
            {errors.password}
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
        Sign in
      </Button>
    </form>
  );
}

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignInForm);
