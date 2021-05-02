import styled from "styled-components";

const MenuComponent = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -24px;
`;

export const MenuLink = styled.a`
    position: relative;
    display: block;
    color: ${(props) => props.theme.colorNeutralDark};
    font-weight: 700;
    padding: 12px 24px;
    transition: all ease 0.3s;
    cursor: pointer;
    &.active,
    &:hover {
        color: ${(props) => props.theme.colorHighlightLight};
    }
`;

export default MenuComponent;
