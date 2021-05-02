import styled from "styled-components";

const PageRegistrar = styled.div`
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

export const ColumnRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
`;

export const LogoPageRegistrar = styled.a`
    position: absolute;
    top: 48px;
    left: 48px;
    cursor: pointer;
    z-index: 9;
    img {
        width: auto;
        height: 48px;
    }
`;

export const ImageStyles = styled.img`
    position: relative;
    display: block;
    max-width: 500px;
    width: 100%;
    height: auto;
    z-index: 1;
`;

export const FormRegistrar = styled.form`
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
    font-size: 74px;
    line-height: 56px;
    margin-bottom: 24px;
    letter-spacing: -4px;
    span {
        display: block;
        &:nth-child(1),
        &:nth-child(3) {
            font-weight: 700;
        }
        &:nth-child(3) {
            color: ${(props) => props.theme.colorNeutralWhite};
            background-color: ${(props) => props.theme.colorBrandPure};
            padding: 8px 24px;
        }
    }
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

export const FormCheckboxGroup = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
    label {
        position: relative;
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 2px;
        background-color: ${(props) => props.theme.colorNeutralLightest};
        cursor: pointer;
    }

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked + label {
        &:before {
            content: "\f143";
            position: absolute;
            display: block;
            top: 4px;
            left: 4px;
            right: 4px;
            bottom: 4px;
            color: ${(props) => props.theme.colorBrandPure};
            font-family: uicons-bold-rounded !important;
            font-style: normal;
            font-weight: normal !important;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }

    p {
        color: ${(props) => props.theme.colorNeutralBlack};
        margin-left: 12px;
        a {
            color: ${(props) => props.theme.colorHighlightLight};
            &:hover {
                color: ${(props) => props.theme.colorHighlightPure};
            }
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

export default PageRegistrar;
