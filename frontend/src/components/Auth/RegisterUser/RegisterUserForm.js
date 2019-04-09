import React, { Component } from "react";
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
	},
	error: {
		color: red
	}
});

function RegisterForm(props) {
	const {
		classes,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit
	} = props;
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
						<InputLabel htmlFor="phonenumber">Phone number</InputLabel>
						<Input
							id="phonenumber"
							name="phonenumber"
							autoComplete="phonenumber"
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.phonenumber && Boolean(errors.phonenumber)}
							aria-describedby="component-error-text"
							autoFocus
						/>
						{Boolean(errors.phonenumber) && (
							<FormHelperText id="component-error-text">
								{errors.phonenumber}
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
			</Paper>
		</main>
	);
}

RegisterForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
