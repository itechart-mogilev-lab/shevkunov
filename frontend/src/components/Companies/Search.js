import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { sortType, selectCity, selectService } from "../../helpers/enum";
import { stringify } from "query-string";

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
			{option.name}
		</MenuItem>
	));
}

class SearchComponent extends Component {
	constructor() {
		super();

		this.state = {
			sort: "",
			city: "",
			companyName: "",
			service: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.queryCreator = this.queryCreator.bind(this);
	}

	queryCreator(sorting) {
		for (let key in sorting) {
			if (sorting[key] == "" || sorting[key] == null) {
				delete sorting[key];
			}
		}
		return stringify(sorting);
	}

	handleSearch() {
		const path = this.props.location.pathname;
		const query = { ...this.state };
		const queryStringified = this.queryCreator(query);
		this.props.history.push(`${path}?${queryStringified}`);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		const { classes } = this.props;
		const { sort, city, companyName, service } = this.state;
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
						onChange={this.handleChange}
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
					/>
				</div>
				<FormControl className={classes.formControl}>
					<Select value={sort} name="sort" onChange={this.handleChange}>
						{selectItem(sortType)}
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<Select value={city} name="city" onChange={this.handleChange}>
						{selectItem(selectCity)}
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<Select value={service} name="service" onChange={this.handleChange}>
						{selectItem(selectService)}
					</Select>
				</FormControl>
				<Button
					size="small"
					variant="contained"
					color="primary"
					onClick={this.handleSearch}
				>
					Найти
				</Button>
			</div>
		);
	}
}
export default withRouter(withStyles(styles)(SearchComponent));
