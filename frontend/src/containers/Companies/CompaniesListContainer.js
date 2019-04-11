import { connect } from "react-redux";
// import { goToDetailPage } from '../actions'
import CompanyList from "../../components/Companies/CompanyList";

const mapStateToProps = state => {
  return {
    companiesList: state.companiesList
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClick: (item) => {
//             dispatch(goToDetailPage(item));
//         }
//     }
// };

const CompanyListComponent = connect(
  mapStateToProps,
  null
)(CompanyList);

export default CompanyListComponent;
