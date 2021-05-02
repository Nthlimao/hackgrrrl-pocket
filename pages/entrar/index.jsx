import React from "react";
import PageEntrar, {
    ColumnLeft,
    ColumnRight,
    LogoPage,
    FormEntrar,
    FormTitle,
    FormSubtitle,
    FormReset,
    FormFooter,
} from "./entrar.styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const EntrarPage = () => {
    return (
        <PageEntrar>
            <ColumnLeft>
                <LogoPage>
                    <img src="/images/logo.png" alt="" />
                </LogoPage>
                <FormEntrar>
                    <FormTitle>Login</FormTitle>
                    <FormSubtitle>Bem-vindo de volta ;)</FormSubtitle>
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
                        <FormReset>
                            <a href="">Esqueceu a senha?</a>
                        </FormReset>
                        <Button disabled>Entrar</Button>
                        <FormFooter>
                            Ainda não tem Pocket? <a href="">Cadastre-se</a>
                        </FormFooter>
                    </div>
                </FormEntrar>
            </ColumnLeft>
            <ColumnRight></ColumnRight>
        </PageEntrar>
    );
};

export default EntrarPage;
