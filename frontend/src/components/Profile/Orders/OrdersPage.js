import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OrdersList from "./OrdersList";
import { selectService, selectStatus } from "../../../helpers/enum";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Pagination from "../../common/Pagination";
import { WithPagination } from "../../hoc/WithPagination";

const styles = theme => ({
  orders: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "0 50px",
    marginTop: theme.spacing.unit * 8
  },
  pageLinkClassName: {
    textDecoration: "none",
    color: "blue",
    float: "left",
    padding: ["10px", "15px"]
  },
  formControl: {
    width: "180px"
  },
  filters: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  }
});

function selectItem(options) {
  return options.map(option => (
    <MenuItem key={option.name} value={option.value || option.name}>
      {option.name}
    </MenuItem>
  ));
}

class OrdersPageComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.getOrders(this.props.location.search);
  }

  handleFilter() {
    this.props.handleFilter();
    this.props.getOrders(this.props.history.location.search);
  }

  handlePageClick(page) {
    this.props.handlePageClick(page);
    this.props.getOrders(this.props.history.location.search);
  }

  render() {
    let list = <p>Not orders found</p>;
    let pagination = null;
    const {
      classes,
      orders,
      page,
      pages,
      services,
      service,
      status,
      acceptOrder,
      rejectOrder,
      role
    } = this.props;
    if (orders && orders.length !== 0) {
      list = (
        <OrdersList
          orders={orders}
          acceptOrder={acceptOrder}
          rejectOrder={rejectOrder}
          role={role}
        />
      );
      pagination = (
        <Pagination
          pages={pages}
          handlePageClick={this.handlePageClick}
          page={this.props.page - 1}
        />
      );
    }

    return (
      <div className={classes.orders}>
        <div className={classes.filters}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="status">Status</InputLabel>
            <Select
              value={status}
              name="status"
              onChange={this.props.handleChange}
            >
              {selectItem(selectStatus)}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="status">Service</InputLabel>
            <Select
              value={service}
              name="service"
              onChange={this.props.handleChange}
            >
              {selectItem(
                services
                  ? [{ value: "", name: "", _id: 0 }, ...services]
                  : selectService
              )}
            </Select>
          </FormControl>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={this.handleFilter}
          >
            Найти
          </Button>
        </div>
        {list}
        {pagination}
      </div>
    );
  }
}

OrdersPageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.number.isRequired,
  getOrders: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired
};

export default withStyles(styles)(WithPagination(OrdersPageComponent));
