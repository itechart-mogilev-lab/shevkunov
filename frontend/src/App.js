import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./containers/Header/HeaderContainer";
import SignInComponent from "./containers/Auth/SignInContainer";
import RegisterComponent from "./containers/Auth/RegisterContainer";
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
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={SignInComponent} />
						<Route exact path="/register" component={RegisterComponent} />
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
