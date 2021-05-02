import styled from "styled-components";

const ButtonComponent = styled.button`
    display: block;
    width: ${(props) => (props?.width ? props.width : "100%")};
    height: 48px;
    padding: 12px 12px;
    text-align: center;
    color: ${(props) =>
        props?.fontColorName
            ? props.theme[fontColorName]
            : props.theme.colorNeutralWhite};
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 16px;
    font-weight: 700;
    background-color: ${(props) =>
        props?.colorName ? props.theme[colorName] : props.theme.colorBrandPure};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    outline: none;
    transition: all ease 0.3s;
    &:hover {
        opacity: 0.8;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
            opacity: 0.5;
        }
    }
`;

export default ButtonComponent;
