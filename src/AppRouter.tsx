import * as React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import LoginView from "./views/LoginView";
import AdminView from "./views/AdminView";
import {useState} from "react";

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

export const PrivateRoute: React.FC<any> = ({component: Component, ...rest}: {component: any, logged: Boolean}) => {
    const isLogin = () => rest.logged;

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};


export default AppRouter
