import styled from "styled-components";

const HomePage = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const HomeInner = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;
`;

export const HomeBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -120px;
`;

export const BannerContent = styled.div`
    width: 100%;
    max-width: 480px;
`;

export const BannerTitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-weight: 600;
    font-size: 74px;
    line-height: 52px;
    margin-bottom: 24px;
    letter-spacing: -4px;

    span {
        display: block;
        font-weight: 700;
        color: ${(props) => props.theme.colorNeutralWhite};
        background-color: ${(props) => props.theme.colorHighlightLight};
        padding: 8px 12px;
        z-index: -1;
    }
`;

export const BannerSubtitle = styled.p`
    color: ${(props) => props.theme.colorNeutralDark};
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    strong {
        font-weight: 700;
    }
`;

export const CallToAction = styled.a`
    display: block;
    width: 100%;
    max-width: 420px;
    padding: 18px 48px;
    text-align: center;
    color: ${(props) => props.theme.colorNeutralWhite};
    font-family: ${(props) => props.theme.fontFamilyGlobal};
    font-size: 18px;
    font-weight: 700;
    background-color: ${(props) => props.theme.colorBrandPure};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;

export default HomePage;
