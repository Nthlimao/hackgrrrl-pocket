import styled from "styled-components";

const CompletePage = styled.div`
    background-color: ${(props) => props.theme.colorNeutralLightest};
`;

export const CompleteHeader = styled.div`
    height: 64px;
    background-color: ${(props) => props.theme.colorNeutralWhite};
    border-bottom: 1px solid ${(props) => props.theme.colorNeutralLight};
    margin-bottom: 24px;
`;

export const CompleteHeaderInner = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`;

export const HeaderTitle = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${(props) => props.theme.colorNeutralBlack};
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -1px;
`;

export const CompleteBody = styled.div`
    padding: 24px 24px 60px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colorNeutralWhite};
`;

export const CompleteFormSubtitle = styled.p`
    color: ${(props) => props.theme.colorNeutralBlack};
    font-size: 21px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 24px;
`;

export const CompleteGrid = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -8px;
`;

export const CompleteGridItem = styled.div`
    width: 100%;
    max-width: 33.33333%;
    padding: 0 8px;
`;

export const CompleteFormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 24px 0;
    margin-top: 24px;
    border-top: 1px solid ${(props) => props.theme.colorNeutralLightest};
`;

export default CompletePage;
