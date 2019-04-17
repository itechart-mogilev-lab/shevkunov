import React from "react";
import PropTypes from "prop-types";
import CompanyCard from "./CompanyCard";
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

const CompanyList = ({ companiesList, onClick, classes, order, showModal }) => (
  <div className={classes.table}>
    {companiesList.map(company => (
      <CompanyCard
        key={company._id}
        order={order}
        {...company}
        onClick={() => onClick(company)}
        showModal={showModal}
      />
    ))}
  </div>
);

CompanyList.propTypes = {
  companiesList: PropTypes.array,
  onClick: PropTypes.func
};

export default withStyles(styles)(CompanyList);
