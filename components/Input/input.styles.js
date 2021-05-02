import styled from "styled-components";

const InputComponent = styled.div``;

export const InputLabel = styled.label`
    display: block;
    color: ${(props) => props.theme.colorNeutralDarkest};
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 16px;
    margin-bottom: 8px;
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colorNeutralLightest};
    background-color: ${(props) => props.theme.colorNeutralLightest};
    margin-bottom: 21px;
    i[class*="fi-br-"] {
        margin-left: 24px;
        color: ${(props) => props.theme.colorNeutralDark};
    }
`;

export const InputStyles = styled.input`
    display: block;
    width: 100%;
    height: 48px;
    padding: 12px 12px 12px 24px;
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 16px;
    background-color: ${(props) => props.theme.colorNeutralLightest};
    border: none;
    outline: none;
`;

export default InputComponent;
