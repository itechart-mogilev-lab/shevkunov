import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ProfilePageComponent from "../Profile/CompanyProfileComponent";
import ReviewsList from "../Companies/Reviews/ReviewsList";

import { Link } from "react-router-dom";

const styles = {
  card: {
    width: "100%",
    minHeight: 520
  }
};

class CompanyMainPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getCompanyReviews = this.getCompanyReviews.bind(this);
    //this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.props.getCompanyDetails(this.props.match.params.id);
    this.props.resetCompanyReviews();
    this.getCompanyReviews();
  }

  getCompanyReviews() {
    this.props.getCompanyReviews(this.props.match.params.id);
  }

  handleClick() {
    this.props.setCompany(this.props.company);
  }

  /*queryCreator(sorting) {
    for (let key in sorting) {
      if (sorting[key] === "" || sorting[key] === null) {
        delete sorting[key];
      }
    }
    return stringify(sorting);
  }

  loadMore() {
    this.setState({
      page: this.state.page + 1
    });
    const path = this.props.location.pathname;
    const query = { ...this.state };
    console.log("QUERY", query);
    const queryStringified = this.queryCreator(query);
    this.props.history.push(`${path}?${queryStringified}`);
    this.props.getCompanyReviews(
      this.props.match.params.id,
      this.props.location.search
    );
  }
*/
  render() {
    //console.log("PROPS", this.props);
    //console.log("STATE:", this.state.page);
    const {
      classes,
      company,
      reviews,
      openReviewModal,
      isAuthenticated
    } = this.props;

    if (company)
      return [
        <ProfilePageComponent
          key="company"
          classes={classes}
          company={company}
        />,

        <CardActions key="actions">
          <Button size="small" color="primary" onClick={this.handleClick}>
            <Link to="/booking">Book service</Link>
          </Button>
          {isAuthenticated && (
            <Button size="small" color="primary" onClick={openReviewModal}>
              <p to="/review">Write a review</p>
            </Button>
          )}
        </CardActions>,
        <ReviewsList
          key="reviews"
          reviews={reviews.docs}
          loadMore={this.getCompanyReviews}
          hasMore={reviews.page <= reviews.pages}
        />
      ];
    else return null;
  }
}

CompanyMainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyMainPage);
