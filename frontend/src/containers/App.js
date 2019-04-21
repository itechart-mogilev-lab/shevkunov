import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "../containers/Header/HeaderContainer";
import SignInComponent from "../containers/Auth/SignInContainer";
import RegisterComponent from "../containers/Auth/RegisterContainer";
import VerifyComponent from "../containers/Auth/VerifyContainer";
import ProfileComponent from "../containers/Profile/ProfileContainer";
import EditProfileComponent from "../containers/Profile/EditProfileContainer";
import RegisterCompanyComponent from "../containers/Auth/RegisterCompanyContainer";
import CompaniesPageComponent from "../containers/Companies/CompaniesPageContainer";
import CompanyMainPageContainer from "../containers/Companies/CompanyMainPageContainer";
import OrdersPageComponent from "../containers/Profile/OrdersPageContainer";
import BookingComponent from "../containers/Booking/BookingContainer";
import ModalContainer from "../containers/Modal/ModalContainer";
import ReviewContainer from "../containers/Modal/ReviewContainer";
import NotFound from "../components/NotFound";
import ChangePassword from "../containers/Profile/ChangePasswordContainer";
import { PrivateRoute } from "../components/hoc/PrivateRoute";

function App(props) {
  return (
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
          shouldRedirect={props.isAuth}
        />
        <PrivateRoute
          exact
          path="/profile/edit"
          component={EditProfileComponent}
          redirect="/register"
          shouldRedirect={props.isAuth}
        />
        <PrivateRoute
          exact
          path="/profile/change_password"
          component={ChangePassword}
          redirect="/register"
          shouldRedirect={props.isAuth}
        />
        <PrivateRoute
          exact
          path="/register-company"
          component={RegisterCompanyComponent}
          redirect="/profile"
          shouldRedirect={!props.isAuth}
        />
        <Route exact path="/companies" component={CompaniesPageComponent} />
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
          shouldRedirect={props.isAuth}
        />
        <Route exact path="/booking" component={BookingComponent} />
        <Route component={NotFound} />
      </Switch>
      <ModalContainer />
      <ReviewContainer />
    </>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
