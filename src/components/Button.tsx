import * as React from "react";

export interface IButtonProps {
    children?: React.ReactNode;
    onClick?: (e:any) => void;
    styles?: {}
}

const styles = {
    border: "1px solid #eee",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    fontsize: 15,
    padding: "3px 10px",
    margin: 10,
};

const Button: React.FC<IButtonProps> = (props) => (
    <button onClick={props.onClick} style={props.styles} type={"button"}>
        {props.children}
    </button>
);

Button.defaultProps = {
    children: null,
    onClick: () => {},
    styles,
};

export default Button;