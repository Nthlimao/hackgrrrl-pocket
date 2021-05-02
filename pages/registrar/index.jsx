import React from "react";
import PageRegistrar, {
    ColumnLeft,
    ColumnRight,
    LogoPageRegistrar,
    ImageStyles,
    FormRegistrar,
    FormTitle,
    FormSubtitle,
    FormCheckboxGroup,
    FormFooter,
} from "./registrar.styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const RegistrarPage = () => {
    return (
        <PageRegistrar>
            <ColumnLeft>
                <LogoPageRegistrar>
                    <img src="/images/logo.png" alt="" />
                </LogoPageRegistrar>
                <ImageStyles src="/images/login-mobile.png" alt="" />
            </ColumnLeft>
            <ColumnRight>
                <FormRegistrar>
                    <FormTitle>
                        <span>Crie sua</span>
                        <span>conta na</span>
                        <span>Pocket!</span>
                    </FormTitle>
                    <FormSubtitle>
                        Ganhe dinheiro respondendo perguntas sobre publicidade
                        ;)
                    </FormSubtitle>
                    <div>
                        <Input
                            icon="user"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            icon="lock"
                            type="password"
                            name="password"
                            placeholder="Senha"
                        />
                        <FormCheckboxGroup htmlFor="terms">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms"></label>
                            <p>
                                Aceito os <a href="">Termos de Uso</a> e{" "}
                                <a href="">Política de Privacidade</a>
                            </p>
                        </FormCheckboxGroup>
                        <Button disabled>Criar conta</Button>
                        <FormFooter>
                            Já tem Pocket? <a href="">Faça login</a>
                        </FormFooter>
                    </div>
                </FormRegistrar>
            </ColumnRight>
        </PageRegistrar>
    );
};

export default RegistrarPage;
