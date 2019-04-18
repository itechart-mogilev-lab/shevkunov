import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function OrderCard(props) {
  const { classes, company, customer, order } = props;
  console.log("ORDER", props);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Company: {company.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Customer: {customer.firstname}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Address: {order.address}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Date and time: {order.date} {order.startTime}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Service: {order.service}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Status: {order.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/companies`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

OrderCard.propTypes = {
  classes: PropTypes.object,
  company: PropTypes.object
};

export default withStyles(styles)(OrderCard);
