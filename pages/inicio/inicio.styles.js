import styled from "styled-components";

const InicioPage = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.colorNeutralLightest};
`;

export const InicioHeader = styled.div`
    height: 64px;
    background-color: ${(props) => props.theme.colorNeutralWhite};
    border-bottom: 1px solid ${(props) => props.theme.colorNeutralLight};
    margin-bottom: 24px;
`;

export const InicioHeaderInner = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`;

export const InicioContent = styled.div`
    padding: 24px 24px 60px;
    border-radius: 4px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colorNeutralWhite};
`;

export const InicioBanner = styled.div`
    display: flex;
    margin-left: -24px;
`;

export const InicioBannerItem = styled.div`
    padding: 24px;
    margin-left: 24px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colorHighlightLight};
    margin-bottom: 24px;
    ${(props) => props?.width && { width: props.width }}
    h3 {
        color: ${(props) => props.theme.colorNeutralWhite};
        font-family: ${(props) => props.theme.fontFamilyHighlight};
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -1px;
        margin-bottom: 12px;
    }
    p {
        color: ${(props) => props.theme.colorNeutralWhite};
        font-weight: 600;
        line-height: 24px;
    }
`;

export const PartnersBanners = styled.div`
    display: flex;
    width: 100%;
    margin: 0 0 48px;
`;

export const PartnersBannersItem = styled.div`
    margin-right: 8px;
    ${(props) => props?.width && { width: props.width }}
    &:last-child {
        margin-right: 0;
    }
    img {
        width: 100%;
        height: 254px;
        object-fit: cover;
        border-radius: 3px;
    }
`;

export const Categories = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const CategoriesTitle = styled.h2`
    width: 100%;
    color: ${(props) => props.theme.colorNeutralBlack};
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -1px;
    margin-bottom: 24px;
`;

export const CategoriesItem = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 25%;
    cursor: pointer;
    margin-bottom: 12px;
    p {
        font-weight: 600;
        color: ${(props) => props.theme.colorNeutralBlack};
        transition: all ease 0.3s;
        &:hover {
            color: ${(props) => props.theme.colorNeutralDark};
        }
    }
`;

export const CategoriesIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    background-color: ${(props) => props.theme.colorBrandLight};
    border-radius: 4px;
    margin-right: 12px;
    i[class*="fi-rr-"] {
        font-size: 21px;
        line-height: 16px;
        color: ${(props) => props.theme.colorNeutralWhite};
    }
`;

export default InicioPage;
