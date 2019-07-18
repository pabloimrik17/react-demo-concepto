import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginView from "./views/LoginView";
import AdminView from "./views/AdminView";
import {useState} from "react";
import PrivateRoute from "./components/router/PrivateRouter";

const AppRouter: React.FC = () => {
    const [logged, setLogged] = useState<Boolean>(false);

    return (
        <Router>
            <Switch>
                <PrivateRoute path={"/"} exact component={AdminView} logged={logged}/>
                <Route path={"/login"} exact render={(routeProps) => <LoginView {...routeProps}  setLogged={setLogged}/>} />
            </Switch>
        </Router>
    )
};

export default AppRouter
