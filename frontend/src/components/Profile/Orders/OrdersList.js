import React from "react";
import PropTypes from "prop-types";
import OrderCard from "./OrderCard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  table: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "30px",
    gridColumn: "1fr 1fr",
    gridRowGap: "30px",
    margin: "20px 0px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr"
    }
  }
});

const OrdersList = ({ orders, classes }) => (
  <div className={classes.table}>
    {orders.map(order => (
      <OrderCard key={order._id} {...order} />
    ))}
  </div>
);

OrdersList.propTypes = {
  orders: PropTypes.array,
  onClick: PropTypes.func
};

export default withStyles(styles)(OrdersList);
