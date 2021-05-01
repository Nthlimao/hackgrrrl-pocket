import styled from "styled-components";

const ComponentTeste = styled.div`
    background-color: blue;
`;

export const ComponentTeste2 = styled.div`
    background-color: red;
`;

export const ComponentP = styled.p`
    color: green;
    &:hover {
        color: red;
    }
`;

export default ComponentTeste;
