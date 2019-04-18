import { connect } from "react-redux";
import { setCompany } from "../../actions/bookingActions";
import { showModal } from "../../actions/modalActions";
import CompanyList from "../../components/Companies/CompanyList";

const mapStateToProps = state => {
  return {
    companiesList: state.companiesList.docs,
    order: state.booking.order
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: company => dispatch(setCompany(company)),
    showModal: () => dispatch(showModal())
  };
};

const CompanyListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);

export default CompanyListComponent;
