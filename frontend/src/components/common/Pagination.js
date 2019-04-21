import React from "react";
import ReactPaginate from "react-paginate";
import { withStyles } from "@material-ui/core/styles";

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

function Pagination({ pages, handlePageClick, classes, page }) {
  return (
    <ReactPaginate
      pageCount={pages}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={classes.pagination_ul}
      pageClassName={classes.paginate_li}
      previousClassName={classes.paginate_li}
      nextClassName={classes.paginate_li}
      pageLinkClassName={classes.paginate_li_a}
      activeLinkClassName={classes.paginate_a_active}
      //initialPage={page}
      forcePage={page}
    />
  );
}

export default withStyles(styles)(Pagination);
