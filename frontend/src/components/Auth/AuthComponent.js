import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import { Link } from "react-router-dom";

function AuthComponent(props) {
  const {
    classes,
    title,
    children,
    titleDown,
    link,
    nameAction,
    otherRegisterLink,
    otherRegisterText
  } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        {children}
        <p>
          {titleDown} <Link to={link}>{nameAction}</Link>
        </p>
        {otherRegisterLink && otherRegisterText && (
          <Link to={otherRegisterLink}>{otherRegisterText}</Link>
        )}
      </Paper>
    </main>
  );
}
const AuthPage = withStyles(styles)(AuthComponent);
export default AuthPage;
