import { connect } from "react-redux";
import { setCompany } from "../../actions/bookingActions";
import CompanyList from "../../components/Companies/CompanyList";

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    companiesList: state.companiesList.docs,
    order: state.booking.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: company => {
      dispatch(setCompany(company));
    }
  };
};

const CompanyListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);

export default CompanyListComponent;
