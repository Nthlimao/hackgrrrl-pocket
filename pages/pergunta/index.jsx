import React from "react";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Helper from "../../components/Helper";

import PerguntaPage, {
    PerguntaContent,
    PerguntaCategory,
    PerguntaTitle,
    Pergunta,
    AnswerGroup,
    Answer,
    AnswerRange,
} from "./inicio.styles";

const PagePergunta = () => {
    return (
        <PerguntaPage>
            <Navbar />
            <Header>
                <Menu />
                <Helper />
            </Header>
            <div className="container">
                <PerguntaContent>
                    <PerguntaCategory>
                        <i className="fi-rr-cookie" />
                        Alimentos e Bebidas
                    </PerguntaCategory>
                    <PerguntaTitle>
                        Você se incomoda com esse tipo de propaganda?
                    </PerguntaTitle>
                    <Pergunta>
                        <img src="/images/perguntas/itaipava.png" alt="" />
                        <AnswerGroup>
                            <AnswerRange
                                type="range"
                                min="1"
                                max="3"
                                class="slider"
                                id="myRange"
                            />
                            <Answer>
                                <p>não me incomodo</p>
                                <p>me incomodo às vezes</p>
                                <p>me incomodo muito</p>
                            </Answer>
                        </AnswerGroup>
                    </Pergunta>
                </PerguntaContent>
            </div>
        </PerguntaPage>
    );
};

export default PagePergunta;
