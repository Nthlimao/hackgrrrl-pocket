import React from "react";
import InputComponent, {
    InputLabel,
    InputGroup,
    InputStyles,
} from "./input.styles";

const Input = ({
    icon,
    label,
    id,
    name,
    type,
    placeholder,
    onChange = () => {},
}) => {
    return (
        <InputComponent>
            {label && <InputLabel>{label}</InputLabel>}
            <InputGroup>
                {icon && <i className={`fi-br-${icon}`}></i>}
                <InputStyles
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </InputGroup>
        </InputComponent>
    );
};

export default Input;
