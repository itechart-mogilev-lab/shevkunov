import React, { Component } from "react";
import CompaniesList from "../../containers/Companies/CompaniesListContainer";
import { withRouter } from "react-router-dom";

class CompaniesPageComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCompaniesList(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.props.getCompaniesList(this.props.location.search);
    }
  }
}
