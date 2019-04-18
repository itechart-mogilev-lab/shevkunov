import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CompaniesList from "../../containers/Companies/CompaniesListContainer";
import { withRouter } from "react-router-dom";
import Search from "./Search";

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
		const { classes, total, docs, pages, page } = this.props;
		if (total > 0) {
			list = <CompaniesList />;
		}

		return (
			<div className={classes.companies}>
				<Search />
				{list}
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

export default withRouter(withStyles(styles)(CompaniesPageComponent));
