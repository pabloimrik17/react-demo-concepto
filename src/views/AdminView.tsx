import * as React from "react";
import {RouteComponentProps} from "react-router";

export interface IAdminViewProps extends RouteComponentProps {}

const AdminView: React.FC<IAdminViewProps> = () => {
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-12">
                    <h1 className={"text-center"}>ADMIN</h1>
                </div>
            </div>
        </div>
    );
};

AdminView.defaultProps = {};

export default AdminView;
