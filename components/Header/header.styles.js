import styled from "styled-components";

const HeaderComponent = styled.div`
    height: 70px;
    background-color: ${(props) => props.theme.colorNeutralWhite};
    border-bottom: 1px solid ${(props) => props.theme.colorNeutralLight};
    margin-bottom: 24px;
`;

export const HeaderComponentInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`;

export default HeaderComponent;
