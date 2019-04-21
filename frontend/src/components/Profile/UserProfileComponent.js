import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    width: "100%",
    minHeight: 520
  }
};

class ProfilePageComponent extends Component {
  render() {
    // const {role} = this.props;
    // if(role === "customer"){

    // } else if(role === "executor"){

    // }
    const { classes, user } = this.props;
    const { firstname, surname, email, phoneNumber } = user;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Grid container alignItems="flex-start">
            <Grid item xs>
              <Typography gutterBottom variant="h5">
                {firstname} {surname}
              </Typography>
            </Grid>
          </Grid>

          <CardContent>
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

ProfilePageComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePageComponent);
