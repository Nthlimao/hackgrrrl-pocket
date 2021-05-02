import styled from "styled-components";

const SelectComponent = styled.div``;

export const SelectLabel = styled.label`
    display: block;
    color: ${(props) => props.theme.colorNeutralBlack};
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 16px;
    font-weight: 600;
    margin-left: 4px;
    margin-bottom: 8px;
`;

export const SelectGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colorNeutralLightest};
    background-color: ${(props) => props.theme.colorNeutralLightest};
    padding-right: 6px;
    margin-bottom: 21px;
    i[class*="fi-br-"] {
        margin-left: 24px;
        color: ${(props) => props.theme.colorNeutralDark};
    }
    &:after {
        content: "\f13f";
        position: absolute;
        top: 50%;
        right: 12px;
        color: ${(props) => props.theme.colorNeutralDark};
        font-family: uicons-bold-rounded !important;
        font-style: normal;
        font-weight: normal !important;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform: translateY(-50%);
    }
`;

export const SelectStyles = styled.select`
    display: block;
    width: 100%;
    height: 48px;
    padding: 12px 6px 12px 24px;
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 16px;
    background-color: ${(props) => props.theme.colorNeutralLightest};
    border: none;
    outline: none;
    -webkit-appearance: none;
`;

export default SelectComponent;
