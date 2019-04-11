import React from "react";
import CompanyCard from "./CompanyCard";

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

const CompanyList = ({ companiesList, onClick, classes }) => (
  <div className={classes.table}>
    {companiesList.companies.map(company => (
      <CompanyCard
        key={company.id}
        {...company}
        onClick={() => onClick(company)}
      />
    ))}
  </div>
);

CompanyList.propTypes = {
  companiesList: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default withStyles(styles)(CompanyCard);
