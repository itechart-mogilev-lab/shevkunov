import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

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
});

class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			secondname: "",
			surname: "",
			email: "",
			password: "",
			password_confirm: "",
			phonenumber: "",
			errors: {}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			firstname: this.state.firstname,
			secondname: this.state.secondname,
			surname: this.state.surname,
			email: this.state.email,
			password: this.state.password,
			phonenumber: this.state.phonenumber
		};
		this.props.registerUser(user, this.props.history);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	render() {
		const { classes } = this.props;
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
					<form className={classes.form} onSubmit={this.handleSubmit}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="firstname">Firstname</InputLabel>
							<Input
								id="firstname"
								name="firstname"
								autoComplete="firstname"
								onChange={this.handleInputChange}
								value={this.state.firstname}
								autoFocus
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="secondname">Secondname</InputLabel>
							<Input
								id="secondname"
								name="secondname"
								autoComplete="secondname"
								onChange={this.handleInputChange}
								value={this.state.secondname}
								autoFocus
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="surname">Surname</InputLabel>
							<Input
								id="surname"
								name="surname"
								autoComplete="surname"
								onChange={this.handleInputChange}
								value={this.state.surname}
								autoFocus
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">Email Address</InputLabel>
							<Input
								id="email"
								name="email"
								autoComplete="email"
								onChange={this.handleInputChange}
								value={this.state.email}
								autoFocus
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								name="password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={this.handleInputChange}
								value={this.state.password}
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password_confirm">Password</InputLabel>
							<Input
								name="password_confirm"
								type="password_confirm"
								id="password_confirm"
								autoComplete="current-password_confirm"
								onChange={this.handleInputChange}
								value={this.state.password_confirm}
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="phonenumber">Phone number</InputLabel>
							<Input
								id="phonenumber"
								name="phonenumber"
								autoComplete="phonenumber"
								onChange={this.handleInputChange}
								value={this.state.phonenumber}
								autoFocus
							/>
						</FormControl>
						<Button
							type="submit"
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
}

RegisterComponent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterComponent);
