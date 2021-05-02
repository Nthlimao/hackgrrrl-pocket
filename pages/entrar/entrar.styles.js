import styled from "styled-components";

const PageEntrar = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const ColumnLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
`;

export const ColumnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.05;
        z-index: 0;
        background-color: ${(props) => props.theme.colorBrandPure};
    }
`;

export const LogoPage = styled.a`
    position: absolute;
    top: 48px;
    left: 48px;
    cursor: pointer;
    img {
        width: auto;
        height: 48px;
    }
`;

export const ImageStyles = styled.img`
    position: relative;
    display: block;
    max-width: 470px;
    width: 100%;
    height: auto;
    z-index: 1;
`;

export const FormEntrar = styled.form`
    position: relative;
    width: 100%;
    max-width: 470px;
    padding: 0 24px;
    box-sizing: border-box;
`;

export const FormTitle = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-weight: 700;
    font-size: 74px;
    line-height: 56px;
    margin-bottom: 24px;
    letter-spacing: -4px;
`;

export const FormSubtitle = styled.p`
    color: ${(props) =>
        props?.colorName
            ? props.theme[props.colorName]
            : props.theme.colorNeutralDark};
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 24px;
`;

export const FormReset = styled.div`
    color: ${(props) => props.theme.colorNeutralBlack};
    margin-top: -12px;
    margin-bottom: 24px;
    text-align: right;
    a {
        color: ${(props) => props.theme.colorHighlightLight};
        &:hover {
            color: ${(props) => props.theme.colorHighlightPure};
        }
    }
`;

export const FormFooter = styled.div`
    color: ${(props) => props.theme.colorNeutralBlack};
    font-weight: 600;
    margin-top: 12px;
    text-align: center;
    a {
        color: ${(props) => props.theme.colorHighlightLight};
        &:hover {
            color: ${(props) => props.theme.colorHighlightPure};
        }
    }
`;

export default PageEntrar;
