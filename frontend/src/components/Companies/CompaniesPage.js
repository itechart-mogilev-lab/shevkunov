import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CompaniesList from "./CompanyList";
import { withRouter } from "react-router-dom";
import Search from "./Search";
import Pagination from "../common/Pagination";
import { WithPagination } from "../hoc/WithPagination";

const styles = theme => ({
  companies: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "0 50px"
  },
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
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0"
  }
});

class CompaniesPageComponent extends Component {
  componentDidMount() {
    this.props.getCompaniesList(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.props.getCompaniesList(this.props.location.search);
    }
  }

  render() {
    let list = <p>Not companies found</p>;
    let pagination = null;
    const { classes, total, pages, page } = this.props;
    if (total > 0) {
      list = (
        <CompaniesList
          docs={this.props.docs}
          role={this.props.role}
          order={this.props.order}
          onClick={this.props.onClick}
          showModal={this.props.showModal}
        />
      );
      pagination = (
        <Pagination
          pages={pages}
          handlePageClick={this.props.handlePageClick}
          page={page - 1}
        />
      );
    }
    return (
      <div className={classes.companies}>
        <Search
          city={this.props.city}
          sort={this.props.sort}
          companyName={this.props.companyName}
          service={this.props.service}
          handleChange={this.props.handleChange}
          handleFilter={this.props.handleFilter}
          queryCreator={this.props.queryCreator}
        />
        {list}
        {pagination}
      </div>
    );
  }
}

CompaniesPageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getCompaniesList: PropTypes.func.isRequired
};

export default withRouter(
  withStyles(styles)(WithPagination(CompaniesPageComponent))
);
