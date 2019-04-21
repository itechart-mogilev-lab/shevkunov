import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./containers/Header/HeaderContainer";
import SignInComponent from "./containers/Auth/SignInContainer";
import RegisterComponent from "./containers/Auth/RegisterContainer";
import VerifyComponent from "./containers/Auth/VerifyContainer";
import ProfileComponent from "./containers/Profile/ProfileContainer";
import EditProfileComponent from "./containers/Profile/EditProfileContainer";
import Home from "./components/Home/HomeComponent";
import RegisterCompanyComponent from "./containers/Auth/RegisterCompanyContainer";
import CompaniesPageComponent from "./containers/Companies/CompaniesPageContainer";
import CompanyMainPageContainer from "./containers/Companies/CompanyMainPageContainer";
import OrdersPageComponent from "./containers/Profile/OrdersPageContainer";
import BookingComponent from "./containers/Booking/BookingContainer";
import ModalContainer from "./containers/Modal/ModalContainer";
import ReviewContainer from "./containers/Modal/ReviewContainer";
import NotFound from "./components/NotFound";
import { PrivateRoute } from "./components/hoc/PrivateRoute";
import { initializePreviousToken } from "./helpers/authFromLocalStorage";
import "./styles/styles.css";

initializePreviousToken(store);

class App extends Component {
  render() {
    const isAuth = store.getState().auth.isAuthenticated;
    return (
      <Provider store={store}>
        <Router>
          <>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            />
            <Header />
            <Switch>
              <Route exact path="/" component={CompaniesPageComponent} />
              <Route exact path="/login" component={SignInComponent} />
              <Route exact path="/register" component={RegisterComponent} />
              <Route exact path="/confirmation" component={VerifyComponent} />
              <PrivateRoute
                exact
                path="/profile"
                component={ProfileComponent}
                redirect="/register"
                shouldRedirect={isAuth}
              />
              <PrivateRoute
                exact
                path="/profile/edit"
                component={EditProfileComponent}
                redirect="/register"
                shouldRedirect={isAuth}
              />
              <PrivateRoute
                exact
                path="/register-company"
                component={RegisterCompanyComponent}
                redirect="/profile"
                shouldRedirect={!isAuth}
              />
              <Route
                exact
                path="/companies"
                component={CompaniesPageComponent}
              />
              <Route
                exact
                path={`/companies/:id`}
                component={CompanyMainPageContainer}
              />
              <PrivateRoute
                exact
                path="/orders"
                component={OrdersPageComponent}
                redirect="/"
                shouldRedirect={isAuth}
              />
              <Route exact path="/booking" component={BookingComponent} />
              <Route component={NotFound} />
            </Switch>
            <ModalContainer />
            <ReviewContainer />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
