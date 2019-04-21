import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AppContainer from "./containers/App";
import { initializePreviousToken } from "./helpers/authFromLocalStorage";
import "./styles/styles.css";

initializePreviousToken(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>
    );
  }
}

export default App;
