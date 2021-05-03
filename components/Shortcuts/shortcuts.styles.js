import styled from "styled-components";

const ShortcutsComponent = styled.div`
    position: fixed;
    bottom: 0;
    left: 48px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: ${(props) => props.theme.colorBrandPure};
    border-bottom: 2px solid ${(props) => props.theme.colorBrandDark};
    z-index: 9999;
`;

export const ShortcutsLink = styled.a`
    position: relative;
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.colorNeutralWhite};
    font-weight: bold;
    padding: 24px;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.colorNeutralLight};
    }
    &:after {
        content: "";
        position: absolute;
        top: 13px;
        bottom: 11px;
        width: 1px;
        right: 0;
        background-color: ${(props) => props.theme.colorBrandDark};
    }
    &:last-child {
        &:after {
            display: none;
        }
    }
`;

export default ShortcutsComponent;
