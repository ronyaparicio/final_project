import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
const App = () =>
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  </Router>;

export default App;