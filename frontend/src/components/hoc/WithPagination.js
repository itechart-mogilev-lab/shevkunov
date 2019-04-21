import React, { Component } from "react";
import { stringify, parse } from "query-string";

export const WithPagination = Component =>
  class extends Component {
    constructor(props) {
      super(props);
      const parsed = parse(props.location.search);
      this.state = {
        status: parsed.status || "",
        service: parsed.service || "",
        page: parsed.page || 1,
        sort: parsed.sort || "",
        city: parsed.city || "",
        companyName: parsed.companyName || ""
      };
      this.handlePageClick = this.handlePageClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.queryCreator = this.queryCreator.bind(this);
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
      this.setState({ page: 1 });
      const query = { ...this.state, page: 1 };
      const queryStringified = this.queryCreator(query);
      this.props.history.push(`${path}?${queryStringified}`);
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
    }

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          handlePageClick={this.handlePageClick}
          handleChange={this.handleChange}
          handleFilter={this.handleFilter}
          queryCreator={this.queryCreator}
        />
      );
    }
  };
