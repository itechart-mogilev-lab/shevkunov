import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OrdersList from "./OrdersList";

const styles = theme => ({
  orders: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "0 50px"
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0"
  }
});

class OrdersPageComponent extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    let list = <p>Not orders found</p>;
    const { classes, orders, pages, page } = this.props;
    if (orders) {
      list = <OrdersList orders={orders} />;
    }

    return <div className={classes.orders}>{list}</div>;
  }
}

OrdersPageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getOrders: PropTypes.func.isRequired
};

export default withStyles(styles)(OrdersPageComponent);
