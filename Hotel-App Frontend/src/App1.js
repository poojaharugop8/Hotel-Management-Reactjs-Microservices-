import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App1() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/SignUp">
        <Signup />
      </Route>
      <Route exact path="/Home">
        <App />
      </Route>
    </Router>
  );
}

export default App1;
