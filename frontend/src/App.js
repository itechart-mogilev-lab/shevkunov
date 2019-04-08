import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./containers/Header/HeaderContainer";
import SignInComponent from "./containers/Auth/SignInContainer";
import RegisterComponent from "./containers/Auth/RegisterContainer";
import VerifyComponent from "./containers/Auth/VerifyContainer";
import ProfileComponent from "./containers/Profile/ProfileContainer";
import Home from "./components/Home/HomeComponent";
import "./styles/styles.css";

class App extends Component {
	render() {
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
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={SignInComponent} />
							<Route exact path="/register" component={RegisterComponent} />
							<Route exact path="/confirmation" component={VerifyComponent} />
							<Route exact path="/profile" component={ProfileComponent} />
						</Switch>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
