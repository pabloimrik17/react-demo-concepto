import * as React from "react";

interface IButtonProps {
    children?: React.ReactNode
    onClick?: (e: any) => void
    styles?: {}
    className?: string
}

const styles: React.CSSProperties = {};

const Button: React.FC<IButtonProps> = (props) => {

    return (
        <button type={"button"}
                onClick={props.onClick}
                className={props.className}
                style={props.styles}>
            {props.children}
        </button>
    )
};

Button.defaultProps = {
    children: null,
    onClick: () => {},
    styles,
    className: "btn btn-primary",
};

export default Button;
