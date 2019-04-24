import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { sortType, selectCity, selectService } from "../../helpers/enum";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  select: {
    paddingTop: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    background: "#e5e7ea",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing.unit * 2,
    margin: "20px 30px",
    width: "80%"
  },
  filters: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "20px 30px",
    width: "80%"
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%"
  },
  main: {
    display: "block",
    width: "100%",
    alignItems: "center",
    background: "white",
    border: "1px solid",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

function selectItem(options) {
  return options.map(option => (
    <MenuItem key={option.value} value={option.value}>
      {option.name || option.value}
    </MenuItem>
  ));
}

class SearchComponent extends Component {
  render() {
    const {
      classes,
      sort,
      city,
      companyName,
      service,
      handleChange,
      handleFilter
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            name="companyName"
            value={companyName}
            onChange={handleChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <div className={classes.filters}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sort">Sort</InputLabel>
            <Select value={sort} name="sort" onChange={handleChange}>
              {selectItem(sortType)}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Select value={city} name="city" onChange={handleChange}>
              {selectItem(selectCity)}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="service">Service</InputLabel>
            <Select value={service} name="service" onChange={handleChange}>
              {selectItem(selectService)}
            </Select>
          </FormControl>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleFilter}
          >
            Найти
          </Button>
        </div>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(SearchComponent));
