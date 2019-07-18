import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {FormEvent} from "react";

export interface ILoginProps {
    setLogged: Function
}

const LoginView: React.FC<ILoginProps & RouteComponentProps> = (props) => {
    const obSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.setLogged(true);
        props.history.push("/");
    };

    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-12">
                    <h1 className={"text-center"}>Login</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" onClick={obSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withRouter(LoginView);
