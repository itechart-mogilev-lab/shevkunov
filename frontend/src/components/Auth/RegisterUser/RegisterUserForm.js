import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import ErrorSnackbar from "../../common/ErrorSnackbar";
import styles from "../styles";

function RegisterForm(props) {
	const {
		classes,
		errors,
		errorMessage,
		touched,
		handleChange,
		handleBlur,
		handleSubmit
	} = props;
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
				<InputLabel htmlFor="firstname">Firstname</InputLabel>
				<Input
					id="firstname"
					name="firstname"
					autoComplete="firstname"
					onChange={handleChange}
					onBlur={handleBlur}
					aria-describedby="component-error-text"
					error={touched.firstname && Boolean(errors.firstname)}
				/>
				{Boolean(errors.firstname) && (
					<FormHelperText id="component-error-text">
						{errors.firstname}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="surname">Surname</InputLabel>
				<Input
					id="surname"
					name="surname"
					autoComplete="surname"
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.surname && Boolean(errors.surname)}
					aria-describedby="component-error-text"
				/>
				{Boolean(errors.surname) && (
					<FormHelperText id="component-error-text">
						{errors.surname}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="email">Email Address</InputLabel>
				<Input
					id="email"
					name="email"
					autoComplete="email"
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.email && Boolean(errors.email)}
					aria-describedby="component-error-text"
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
					aria-describedby="component-error-text"
					error={touched.password && Boolean(errors.password)}
				/>
				{Boolean(errors.password) && (
					<FormHelperText id="component-error-text">
						{errors.password}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="confirmPassword">Password</InputLabel>
				<Input
					name="confirmPassword"
					type="password"
					id="confirmPassword"
					autoComplete="confirmPassword"
					onChange={handleChange}
					onBlur={handleBlur}
					aria-describedby="component-error-text"
					error={touched.confirmPassword && Boolean(errors.confirmPassword)}
				/>
				{Boolean(errors.confirmPassword) && (
					<FormHelperText id="component-error-text">
						{errors.confirmPassword}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl margin="normal" required fullWidth>
				<InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
				<Input
					id="phoneNumber"
					name="phoneNumber"
					autoComplete="phoneNumber"
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.phoneNumber && Boolean(errors.phoneNumber)}
					aria-describedby="component-error-text"
					autoFocus
				/>
				{Boolean(errors.phoneNumber) && (
					<FormHelperText id="component-error-text">
						{errors.phoneNumber}
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
				Register
			</Button>
		</form>
	);
}

RegisterForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
