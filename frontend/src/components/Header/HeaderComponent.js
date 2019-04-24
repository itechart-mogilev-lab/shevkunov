import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Button color="inherit" onClick={this.onLogout.bind(this)}>
        Logout
      </Button>
    );
    const guestLinks = (
      <>
        <Link to="/register">
          <Button color="inherit">Register</Button>
        </Link>
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
      </>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Cleaning Service
            </Typography>
            {isAuthenticated && (
              <Link to="/profile">
                <Button color="inherit">My Profile</Button>
              </Link>
            )}
            <Link to="/companies">
              <Button color="inherit">Companies</Button>
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Header));
