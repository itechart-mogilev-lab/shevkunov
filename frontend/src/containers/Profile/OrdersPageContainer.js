import { connect } from "react-redux";
//import { getCurrentProfile } from "../../actions/userActions";
import { getOrders } from "../../actions/ordersActions";
import OrdersPageComponent from "../../components/Profile/Orders/OrdersPage";

const mapStateToProps = state => ({
  orders: state.ordersList.docs
});

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPageComponent);
