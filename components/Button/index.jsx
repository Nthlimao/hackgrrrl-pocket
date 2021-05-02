import React from "react";
import ButtonComponent from "./button.styles";

const Button = ({ children, type = "button", disabled = false }) => {
    return (
        <ButtonComponent type={type} disabled={disabled}>
            {children}
        </ButtonComponent>
    );
};

export default Button;
