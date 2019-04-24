import { connect } from "react-redux";
//import { getCurrentProfile } from "../../actions/userActions";
import {
  getOrders,
  acceptOrder,
  rejectOrder
} from "../../actions/ordersActions";
import OrdersPageComponent from "../../components/Profile/Orders/OrdersPage";

const mapStateToProps = state => ({
  orders: state.ordersList.docs,
  pages: state.ordersList.pages,
  page: state.ordersList.page,
  role: state.auth.profile.role,
  services: state.auth.profile.services
});

const mapDispatchToProps = dispatch => {
  return {
    getOrders: query => dispatch(getOrders(query)),
    acceptOrder: id => dispatch(acceptOrder(id)),
    rejectOrder: id => dispatch(rejectOrder(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPageComponent);
