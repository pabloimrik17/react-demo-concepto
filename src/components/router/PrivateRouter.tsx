import * as React from "react";
import {Redirect, Route, RouteProps} from "react-router";

// https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e

interface IPrivateRouteProps extends RouteProps {
    component: any // TODO
    logged: Boolean
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({component, logged, ...rest}) => {
    const isLogin = () => logged;
    const Component = component;

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

export default PrivateRoute;
