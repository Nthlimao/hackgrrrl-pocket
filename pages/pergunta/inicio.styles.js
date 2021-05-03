import styled from "styled-components";

const PerguntaPage = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.colorNeutralLightest};
`;

export const PerguntaContent = styled.div`
    padding: 24px 24px 60px;
    border-radius: 4px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colorNeutralWhite};
`;

export const PerguntaCategory = styled.div`
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.colorNeutralWhite};
    background-color: ${(props) => props.theme.colorBrandPure};
    font-weight: bold;
    padding: 12px 24px;
    margin: 0 12px;
    border-radius: 4px;
    border-bottom: 3px solid ${(props) => props.theme.colorBrandDark};
    i[class*="fi-rr-"] {
        margin-right: 12px;
        line-height: 12px;
    }
`;

export const PerguntaTitle = styled.h2`
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-weight: 600;
    font-size: 32px;
    line-height: 52px;
    margin-bottom: 24px;
    letter-spacing: -2px;
    margin: 24px 12px;
    text-align: center;
`;

export const Pergunta = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    img {
        width: 100%;
        max-width: 470px;
    }
`;

export const AnswerGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 24px 0;
`;

export const Answer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
`;

export const AnswerRange = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 20px;
    background: ${(props) => props.theme.colorNeutralLight};
    border-radius: 2px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 35px;
        border-radius: 2px;
        background: ${(props) => props.theme.colorBrandPure};
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 10px;
        height: 35px;
        border-radius: 2px;
        background: ${(props) => props.theme.colorBrandPure};
        cursor: pointer;
    }
`;

export default PerguntaPage;
