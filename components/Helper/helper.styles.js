import styled from "styled-components";

const HelperComponent = styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colorNeutralDarkest};
    font-weight: 700;
    i[class*="fi-br-"] {
        margin-right: 12px;
        font-size: 18px;
        color: ${(props) => props.theme.colorHighlightLight};
    }
`;

export default HelperComponent;
