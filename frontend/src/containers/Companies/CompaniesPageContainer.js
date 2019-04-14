import { connect } from "react-redux";
import { getCompaniesList } from "../../actions/companyActions";
import CompaniesPageComponent from "../../components/Companies/CompaniesPage";

const mapStateToProps = state => ({
  docs: state.companiesList.docs,
  page: state.companiesList.page,
  pages: state.companiesList.pages,
  total: state.companiesList.total
});

const mapDispatchToProps = dispatch => {
  return {
    getCompaniesList: quieres => {
      dispatch(getCompaniesList(quieres));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesPageComponent);
