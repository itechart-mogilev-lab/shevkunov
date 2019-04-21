import React from "react";
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

function CompanyCard(props) {
  const { classes, order, onClick, showModal, role } = props;
  const { name, address, _id, rating } = props;

  const linkBooking = <Link to={`/booking`}>Book service</Link>;
  const linkConfirm = <p>Book service</p>;
  const link = order ? linkConfirm : linkBooking;

  const goToBook = () => {
    onClick();
    showModal();
  };

  const action = order ? goToBook : onClick;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Адрес: {address.country}, {address.city}, {address.other}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Rating: {rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/companies/${_id}`}>Learn More</Link>
        </Button>
        {role !== "company" && (
          <Button size="small" onClick={action}>
            {link}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

CompanyCard.propTypes = {
  classes: PropTypes.object,
  company: PropTypes.object
};

export default withStyles(styles)(CompanyCard);
