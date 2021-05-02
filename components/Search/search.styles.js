import styled from "styled-components";

const SearchComponent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colorNeutralLightest};
    background-color: ${(props) => props.theme.colorNeutralLightest};
    margin: 0 24px;
    i[class*="fi-br-"] {
        margin-right: 24px;
        color: ${(props) => props.theme.colorNeutralDark};
    }
`;

export const SearchInput = styled.input`
    display: block;
    width: 100%;
    height: 48px;
    padding: 12px 24px 12px 24px;
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 16px;
    background-color: ${(props) => props.theme.colorNeutralLightest};
    border: none;
    outline: none;
`;

export default SearchComponent;
