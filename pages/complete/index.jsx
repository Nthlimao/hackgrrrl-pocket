import React, { useEffect, useState } from "react";

import { useUtils } from "../../services/utils/utils.hooks";

import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import CompletePage, {
    CompleteHeader,
    CompleteHeaderInner,
    HeaderTitle,
    CompleteBody,
    CompleteFormSubtitle,
    CompleteGrid,
    CompleteGridItem,
    CompleteFormFooter,
} from "./complete.styles";

const PageComplete = () => {
    const { getUtils } = useUtils();
    const { data } = getUtils;

    const [utils, setUtils] = useState({});

    useEffect(() => {
        if (data) setUtils(data);
    }, [data]);

    return (
        <CompletePage>
            <Navbar />
            <CompleteHeader>
                <div className="container">
                    <CompleteHeaderInner>
                        <HeaderTitle>Complete seu cadastro</HeaderTitle>
                    </CompleteHeaderInner>
                </div>
            </CompleteHeader>
            <div className="container">
                <CompleteBody>
                    <CompleteFormSubtitle>
                        Queremos saber um pouco mais sobre você!
                    </CompleteFormSubtitle>
                    <CompleteGrid>
                        <CompleteGridItem>
                            <Input
                                type="text"
                                id="firstname"
                                name="firstname"
                                label="Nome"
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Input
                                type="text"
                                id="lastname"
                                name="lastname"
                                label="Sobrenome"
                            />
                        </CompleteGridItem>
                    </CompleteGrid>
                    <CompleteGrid>
                        <CompleteGridItem>
                            <Input
                                icon="calendar"
                                type="text"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                label="Data de Nascimento"
                                placeholder="00/00/000"
                            />
                        </CompleteGridItem>
                    </CompleteGrid>

                    <CompleteGrid>
                        <CompleteGridItem>
                            <Input
                                type="text"
                                id="country"
                                name="country"
                                label="País"
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Input
                                type="text"
                                id="state"
                                name="state"
                                label="Estado"
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Input
                                type="text"
                                id="city"
                                name="city"
                                label="Cidade"
                            />
                        </CompleteGridItem>
                    </CompleteGrid>
                    <CompleteGrid>
                        <CompleteGridItem>
                            <Select
                                id="genders"
                                name="genders"
                                label="Como você se indentifica?"
                                options={utils?.genders}
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Select
                                id="sexualOrientation"
                                name="sexualOrientation"
                                label="Orientação Sexual"
                                options={utils?.sexualOrientations}
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Select
                                id="race"
                                name="race"
                                label="Raça/Cor"
                                options={utils?.races}
                            />
                        </CompleteGridItem>
                    </CompleteGrid>
                    <CompleteGrid>
                        <CompleteGridItem>
                            <Select
                                id="civilStatus"
                                name="civilStatus"
                                label="Estado Civil"
                                options={utils?.civilStatus}
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Select
                                id="schooling"
                                name="schooling"
                                label="Escolaridade"
                                options={utils?.schoolings}
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Select
                                id="remuneration"
                                name="remuneration"
                                label="Remuneração"
                                options={utils?.remunerations}
                            />
                        </CompleteGridItem>
                    </CompleteGrid>
                    <CompleteGrid>
                        <CompleteGridItem>
                            <Input
                                type="text"
                                id="naturalness"
                                name="naturalness"
                                label="Naturalidade"
                                placeholder="ex.: Brasileiro"
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Select
                                id="parenthood"
                                name="parenthood"
                                label="Tem Filho?"
                                options={[
                                    { value: true, name: "Sim" },
                                    { value: false, name: "Não" },
                                ]}
                            />
                        </CompleteGridItem>
                    </CompleteGrid>
                    <CompleteGrid>
                        <CompleteGridItem>
                            <Select
                                id="hasDisability"
                                name="hasDisability"
                                label="Você possui alguma deficiência?"
                                options={[
                                    { value: true, name: "Sim" },
                                    { value: false, name: "Não" },
                                ]}
                            />
                        </CompleteGridItem>
                        <CompleteGridItem>
                            <Select
                                id="disability"
                                name="disability"
                                label="Se sim, qual?"
                                options={utils?.disabilities}
                            />
                        </CompleteGridItem>
                    </CompleteGrid>
                    <CompleteFormFooter>
                        <Button width="30%">Finalizar Cadastro</Button>
                    </CompleteFormFooter>
                </CompleteBody>
            </div>
        </CompletePage>
    );
};

export default PageComplete;
