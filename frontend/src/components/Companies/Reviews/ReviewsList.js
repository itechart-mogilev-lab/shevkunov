import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

function ReviewsList(props) {
  const { classes, reviews, loadMore, hasMore } = props;

  return [
    reviews.map(review => (
      <Card className={classes.card} key={review._id}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {(review.customer && review.customer.surname) || "Unknown customer"}
          </Typography>
          <Typography className={classes.title} variant="h5" component="h2">
            {review.reviewText}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Rating: {review.rating}
          </Typography>
        </CardContent>
      </Card>
    )),
    hasMore && (
      <CardActions key="actions">
        <Button size="small" onClick={loadMore}>
          LoadMore
        </Button>
      </CardActions>
    )
  ];
}

ReviewsList.propTypes = {
  classes: PropTypes.object,
  reviews: PropTypes.array
};

export default withStyles(styles)(ReviewsList);
