import { connect } from "react-redux";
import { getCompaniesList } from "../../actions/companyActions";
import { setCompany } from "../../actions/bookingActions";
import { showModal } from "../../actions/modalActions";
import CompaniesPageComponent from "../../components/Companies/CompaniesPage";

const mapStateToProps = state => ({
  docs: state.companiesList.docs,
  page: state.companiesList.page,
  pages: state.companiesList.pages,
  total: state.companiesList.total,
  role: state.auth.profile && state.auth.profile.role,
  order: state.booking.order
});

const mapDispatchToProps = dispatch => {
  return {
    getCompaniesList: quieres => {
      dispatch(getCompaniesList(quieres));
    },
    onClick: company => dispatch(setCompany(company)),
    showModal: () => dispatch(showModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesPageComponent);
