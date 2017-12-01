import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Mainpage from "./pages/Mainpage";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
<<<<<<< HEAD
import Test from "./pages/Test";

=======
import ActionPage from "./pages/ActionPage";
>>>>>>> 67f3917c485c5cada01f9c380525e1d46e27a7aa

const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/movies" component={Mainpage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/welcome" component={Welcome} />
<<<<<<< HEAD
                <Route exact path="/test" component={Test} />
=======
>>>>>>> 67f3917c485c5cada01f9c380525e1d46e27a7aa
            </Switch>
        </div>
    </Router>;
export default App;