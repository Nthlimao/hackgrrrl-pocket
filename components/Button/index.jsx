import React from "react";
import ButtonComponent from "./button.styles";

const Button = ({ children, type = "button", width, disabled = false }) => {
    return (
        <ButtonComponent type={type} disabled={disabled} width={width}>
            {children}
        </ButtonComponent>
    );
};

export default Button;
