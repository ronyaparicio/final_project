import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Mainpage from "./pages/Mainpage";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import ActionPage from "./pages/ActionPage";

const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/movies" component={Mainpage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/welcome" component={Welcome} />
            </Switch>
        </div>
    </Router>;
export default App;