import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ReactPaginate from "react-paginate";
import OrdersList from "./OrdersList";
import { selectService, selectStatus } from "../../../helpers/enum";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import { stringify } from "query-string";

const styles = theme => ({
  orders: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "0 50px",
    marginTop: theme.spacing.unit * 8
  },
  pagination_ul: {
    display: "inline-block",
    marginLeft: "20px",
    paddingLeft: "0px"
  },
  paginate_li: {
    display: "inline-block",
    border: "1px solid #e0e0e0",
    color: "#000",
    cursor: "pointer",
    marginRight: "3px",
    borderRadius: "5px",
    marginBottom: "5px"
  },
  paginate_li_a: {
    padding: "2px 5px",
    display: "inline-block",
    color: "#000",
    outline: "none"
  },
  paginate_a_active: {
    background: "#e0e0e0",
    outline: "none"
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
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
}

class OrdersPageComponent extends Component {
  constructor() {
    super();
    this.state = {
      status: "",
      service: "",
      page: ""
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.queryCreator = this.queryCreator.bind(this);
  }

  componentDidMount() {
    this.props.getOrders(this.props.history.location.search);
  }

  queryCreator(sorting) {
    for (let key in sorting) {
      if (sorting[key] === "" || sorting[key] === null) {
        delete sorting[key];
      }
    }
    return stringify(sorting);
  }

  handleFilter() {
    const path = this.props.location.pathname;
    const query = { ...this.state };
    const queryStringified = this.queryCreator(query);
    this.props.history.push(`${path}?${queryStringified}`);
    this.props.getOrders(this.props.history.location.search);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handlePageClick(page) {
    this.setState({ page: page.selected + 1 });
    const query = { ...this.state, page: page.selected + 1 };
    const queryStringified = this.queryCreator(query);
    const path = this.props.location.pathname;
    this.props.history.push(`${path}?${queryStringified}`);
    this.props.getOrders(this.props.history.location.search);
  }

  render() {
    let list = <p>Not orders found</p>;
    let pagination = null;
    const { classes, orders, page, pages, ...rest } = this.props;
    const { service, status, pageFilter } = this.state;
    if (orders) {
      list = <OrdersList orders={orders} {...rest} />;
      pagination = (
        <ReactPaginate
          pageCount={pages}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={classes.pagination_ul}
          pageClassName={classes.paginate_li}
          previousClassName={classes.paginate_li}
          nextClassName={classes.paginate_li}
          pageLinkClassName={classes.paginate_li_a}
          activeLinkClassName={classes.paginate_a_active}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      );
    }

    return (
      <div className={classes.orders}>
        <div className={classes.filters}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="status">Status</InputLabel>
            <Select value={status} name="status" onChange={this.handleChange}>
              {selectItem(selectStatus)}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="status">Service</InputLabel>
            <Select value={service} name="service" onChange={this.handleChange}>
              {selectItem(selectService)}
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
  page: PropTypes.number.isRequired,
  getOrders: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired
};

export default withStyles(styles)(OrdersPageComponent);
