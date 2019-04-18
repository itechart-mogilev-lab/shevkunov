import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

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
	error: {
		color: red
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

function selectItem(options) {
	return options.map((option, index) => (
		<MenuItem key={index} value={option.name}>
			{option.name}
		</MenuItem>
	));
}

function BookingForm(props) {
	const {
		classes,
		errors,
		touched,
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		isAuthenticated,
		company
	} = props;
	console.log("PROPS:", props);
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
					<CheckCircleOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Booking
				</Typography>

				<form className={classes.form} onSubmit={handleSubmit}>
					<div className={classes.grid}>
						<FormControl margin="normal" fullWidth required>
							<InputLabel htmlFor="address">Address</InputLabel>
							<Input
								name="address"
								value={values.address}
								onChange={handleChange}
								onBlur={handleBlur}
								fullWidth
								error={touched.address && Boolean(errors.address)}
							/>
							{Boolean(errors.address) && (
								<FormHelperText id="component-error-text">
									{errors.address}
								</FormHelperText>
							)}
						</FormControl>
					</div>
					<div className={classes.grid}>
						<FormControl margin="normal" fullWidth>
							<InputLabel htmlFor="service">Pick service</InputLabel>
							<Select
								value={values.service}
								name="service"
								onChange={handleChange}
								error={touched.service && Boolean(errors.service)}
							>
								{selectItem(values.availableServices)}
							</Select>
							{Boolean(errors.service) && (
								<FormHelperText id="component-error-text">
									{errors.service}
								</FormHelperText>
							)}
						</FormControl>
					</div>
					<p className={classes.formTitle}>Rooms information</p>
					<div className={classes.grid}>
						<FormControl margin="normal" required>
							<InputLabel htmlFor="roomsCount.standart">Standart</InputLabel>
							<Input
								name="roomsCount.standart"
								value={values.roomsCount.standart}
								onChange={handleChange}
								onBlur={handleBlur}
								fullWidth
								error={isRoomError("roomsCount", "standart")}
							/>
							{isRoomError("roomsCount", "standart") && (
								<FormHelperText id="component-error-text">
									{errors["roomsCount"]["standart"]}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl margin="normal" required>
							<InputLabel htmlFor="roomsCount.big">Big</InputLabel>
							<Input
								name="roomsCount.big"
								onChange={handleChange}
								value={values.roomsCount.big}
								onBlur={handleBlur}
								fullWidth
								error={isRoomError("roomsCount", "big")}
							/>
							{isRoomError("roomsCount", "big") && (
								<FormHelperText id="component-error-text">
									{errors["roomsCount"]["big"]}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl margin="normal" required>
							<InputLabel htmlFor="roomsCount.toilet">Toilet</InputLabel>
							<Input
								name="roomsCount.toilet"
								onChange={handleChange}
								value={values.roomsCount.toilet}
								onBlur={handleBlur}
								fullWidth
								error={isRoomError("roomsCount", "toilet")}
							/>
							{isRoomError("roomsCount", "toilet") && (
								<FormHelperText id="component-error-text">
									{errors["roomsCount"]["toilet"]}
								</FormHelperText>
							)}
						</FormControl>
					</div>
					<div className={classes.grid}>
						<FormControl margin="normal" required>
							<InputLabel shrink htmlFor="date">
								Date
							</InputLabel>
							<Input
								name="date"
								type="date"
								onChange={handleChange}
								value={values.date}
								onBlur={handleBlur}
								fullWidth
								error={touched.date && Boolean(errors.date)}
							/>
							{Boolean(errors.date) && (
								<FormHelperText id="component-error-text">
									{errors.date}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl margin="normal" required>
							<InputLabel shrink htmlFor="startTime">
								Time
							</InputLabel>
							<Input
								name="startTime"
								type="time"
								value={values.startTime}
								onChange={handleChange}
								onBlur={handleBlur}
								fullWidth
								error={touched.startTime && Boolean(errors.startTime)}
							/>
							{Boolean(errors.startTime) && (
								<FormHelperText id="component-error-text">
									{errors.startTime}
								</FormHelperText>
							)}
						</FormControl>
					</div>

					<div className={classes.grid}>
						<FormControl margin="normal" className={classes.formControl}>
							<InputLabel htmlFor="regularity">Regularity</InputLabel>
							<Select
								value={values.regularity}
								name="regularity"
								onChange={handleChange}
							>
								{selectItem(values.availableRegularity)}
							</Select>
						</FormControl>
						{values.regularity && values.regularity !== "One time" && (
							<FormControl margin="normal" required>
								<InputLabel htmlFor="duration">Duration</InputLabel>
								<Input
									name="duration"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.duration}
									fullWidth
									error={touched.duration && Boolean(errors.duration)}
								/>
								{Boolean(errors.duration) && (
									<FormHelperText id="component-error-text">
										{errors.duration}
									</FormHelperText>
								)}
							</FormControl>
						)}
					</div>
					{!isAuthenticated && (
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input
								name="email"
								onChange={handleChange}
								value={values.email}
								onBlur={handleBlur}
								fullWidth
								error={touched.email && Boolean(errors.email)}
							/>
							{Boolean(errors.email) && (
								<FormHelperText id="component-error-text">
									{errors.email}
								</FormHelperText>
							)}
						</FormControl>
					)}
					{!isAuthenticated && (
						<div className={classes.grid}>
							<Button size="small">
								<Link to={"/login"}>Login</Link>
							</Button>
						</div>
					)}
					<Button
						type="submit"
						onClick={handleSubmit}
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{company ? "Book" : "Choose company"}
					</Button>
				</form>
			</Paper>
		</main>
	);
}

export default withStyles(styles)(BookingForm);
