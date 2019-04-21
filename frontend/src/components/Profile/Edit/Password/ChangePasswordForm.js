import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import ErrorSnackbar from "../../../common/ErrorSnackbar";
import styles from "../styles";

function ChangePasswordForm(props) {
	const {
		classes,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
		values,
		errorMessage
	} = props;
	console.log("PROPS:", props)
	return (
		<form className={classes.form} onSubmit={handleSubmit}>
		{errorMessage && (
				<ErrorSnackbar
					variant="error"
					className={classes.margin}
					message={errorMessage}
				/>
			)}
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="oldPassword">Enter your old password</InputLabel>
				<Input
					name="oldPassword"
					type="password"
					id="oldPassword"
					autoComplete="current-password"
					onChange={handleChange}
					onBlur={handleBlur}
					aria-describedby="component-error-text"
					error={touched.oldPassword && Boolean(errors.oldPassword)}
				/>
				{Boolean(errors.oldPassword) && (
					<FormHelperText id="component-error-text">
						{errors.oldPassword}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="newPassword">New password</InputLabel>
				<Input
					name="newPassword"
					type="password"
					id="newPassword"
					autoComplete="current-password"
					onChange={handleChange}
					onBlur={handleBlur}
					aria-describedby="component-error-text"
					error={touched.newPassword && Boolean(errors.newPassword)}
				/>
				{Boolean(errors.newPassword) && (
					<FormHelperText id="component-error-text">
						{errors.newPassword}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="confirmNewPassword">Confirm new password</InputLabel>
				<Input
					name="confirmNewPassword"
					type="password"
					id="confirmNewPassword"
					autoComplete="confirmNewPassword"
					onChange={handleChange}
					onBlur={handleBlur}
					aria-describedby="component-error-text"
					error={touched.confirmNewPassword && Boolean(errors.confirmNewPassword)}
				/>
				{Boolean(errors.confirmNewPassword) && (
					<FormHelperText id="component-error-text">
						{errors.confirmNewPassword}
					</FormHelperText>
				)}
			</FormControl>
			<Button
				type="submit"
				onClick={handleSubmit}
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			>
				Save
			</Button>
		</form>
	);
}

ChangePasswordForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChangePasswordForm);
