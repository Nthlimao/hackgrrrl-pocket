import styled from "styled-components";

const NavbarComponent = styled.div`
    position: relative;
    width: 100%;
    height: 90px;
    background-color: ${(props) => props.theme.colorBrandPure};
`;

export const NavbarInner = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavbarLinkPocket = styled.a`
    display: flex;
    align-items: center;
    img {
        margin-top: 18px;
        width: auto;
        height: 48px;
    }
`;

export const NavbarMenu = styled.div`
    display: flex;
    margin: 0 -12px;
`;

export const NavbarMenuLink = styled.a`
    position: relative;
    display: block;
    color: ${(props) => props.theme.colorBrandPure};
    background-color: ${(props) => props.theme.colorNeutralWhite};
    font-weight: bold;
    padding: 12px 24px;
    margin: 0 12px;
    border-radius: 4px;
    border-bottom: 3px solid ${(props) => props.theme.colorBrandDark};
    transition: all ease 0.3s;
    cursor: pointer;
    &.active,
    &:hover {
        color: ${(props) => props.theme.colorHighlightLight};
    }
`;

export default NavbarComponent;
