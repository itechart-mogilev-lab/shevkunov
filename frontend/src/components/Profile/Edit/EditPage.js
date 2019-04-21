import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import EditCompany from "./Company/EditCompanyFormik";
import EditUser from "./User/EditUserFormik";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

function EditProfile(props) {
	const { classes, errorMessage } = props;
	function renderEdit() {
		const { profile } = props;
		if (profile.role === "company") {
			return <EditCompany company={profile} saveChanged={saveChanged} errorMessage={errorMessage} />;
		} else {
			return <EditUser user={profile} saveChanged={saveChanged} errorMessage={errorMessage} />;
		}
	}
	function saveChanged(data) {
		props.saveChanges(data, props.role);
	}
	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Edit your information
				</Typography>
				{renderEdit()}
			</Paper>
		</main>
	);
}

export default withStyles(styles)(EditProfile);
