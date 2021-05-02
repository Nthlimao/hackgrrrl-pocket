import React from "react";
import SelectComponent, {
    SelectLabel,
    SelectGroup,
    SelectStyles,
} from "./select.styles";

const Select = ({
    icon,
    label,
    id,
    name,
    onChange = () => {},
    options = [],
}) => {
    return (
        <SelectComponent>
            {label && <SelectLabel>{label}</SelectLabel>}
            <SelectGroup>
                {icon && <i className={`fi-br-${icon}`}></i>}
                <SelectStyles id={id} name={name} onChange={onChange}>
                    <option value=""></option>
                    {options.map((option) => (
                        <option
                            key={`${name}-${option?.value}`}
                            value={option?.value}
                        >
                            {option?.name}
                        </option>
                    ))}
                </SelectStyles>
            </SelectGroup>
        </SelectComponent>
    );
};

export default Select;
