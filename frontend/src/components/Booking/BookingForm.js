import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import withStyles from "@material-ui/core/styles/withStyles";

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
	return options.map(option => (
		<MenuItem key={option.value} value={option.value}>
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
		values
	} = props;

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
			</Paper>
			<form className={classes.form} onSubmit={handleSubmit}>
				<div className={classes.grid}>
					<FormControl margin="normal" required>
						<InputLabel htmlFor="address">Address</InputLabel>
						<Input
							name="address"
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={touched.address && Boolean(errors.address)}
						/>
					</FormControl>
				</div>
				<FormControl className={classes.formControl}>
					<Select value={service} name="service" onChange={handleChange}>
						{selectItem(values.availableServices)}
					</Select>
				</FormControl>
				<div className={classes.grid}>
					<p className={classes.formTitle}>Rooms</p>
					<FormControl margin="normal" required>
						<InputLabel htmlFor="roomsCount.standart">Standart</InputLabel>
						<Input
							name="roomsCount.standart"
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={
								touched.roomsCount.standart &&
								Boolean(errors.roomsCount.standart)
							}
						/>
					</FormControl>
					<FormControl margin="normal" required>
						<InputLabel htmlFor="roomsCount.big">Big</InputLabel>
						<Input
							name="roomsCount.big"
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={touched.roomsCount.big && Boolean(errors.roomsCount.big)}
						/>
					</FormControl>
					<FormControl margin="normal" required>
						<InputLabel htmlFor="roomsCount.toilet">Toilet</InputLabel>
						<Input
							name="roomsCount.toilet"
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={
								touched.roomsCount.toilet && Boolean(errors.roomsCount.toilet)
							}
						/>
					</FormControl>
				</div>
				<div className={classes.grid}>
					<FormControl margin="normal" required>
						<InputLabel htmlFor="date">Date</InputLabel>
						<Input
							name="date"
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={touched.date && Boolean(errors.date)}
						/>
					</FormControl>
					<FormControl margin="normal" required>
						<InputLabel htmlFor="startTime">Start time</InputLabel>
						<Input
							name="startTime"
							onChange={handleChange}
							onBlur={handleBlur}
							fullWidth
							error={touched.startTime && Boolean(errors.startTime)}
						/>
					</FormControl>
				</div>
			</form>
		</main>
	);
}
