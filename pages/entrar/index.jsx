import React, { useState } from "react";
import { useLogin } from "../../services/login/login.hooks";

import Input from "../../components/Input";
import Button from "../../components/Button";

import PageEntrar, {
    ColumnLeft,
    ColumnRight,
    LogoPage,
    FormEntrar,
    FormTitle,
    FormSubtitle,
    FormReset,
    FormFooter,
    ImageStyles,
} from "./entrar.styles";

const EntrarPage = () => {
    const { submitLogin } = useLogin();
    const [values, setValues] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onChange = ({ target }) => {
        const { value, name } = target;

        setValues((FormValues) => ({
            ...FormValues,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data } = await submitLogin({ variables: values });

            if (data) {
                sessionStorage.setItem("pocket-token", data.token);
                // REDIRECIONAR
            }

            console.log(result);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err?.graphQLErrors) {
                setError(err.graphQLErrors[0].message);
            }
        }
    };

    return (
        <PageEntrar>
            <ColumnLeft>
                <LogoPage>
                    <img src="/images/logo.png" alt="" />
                </LogoPage>
                <FormEntrar onSubmit={onSubmit}>
                    <FormTitle>Login</FormTitle>
                    <FormSubtitle>Bem-vindo de volta ;)</FormSubtitle>
                    {error && (
                        <FormSubtitle colorName="colorNegative">
                            {error}
                        </FormSubtitle>
                    )}
                    <div>
                        <Input
                            icon="user"
                            type="email"
                            name="email"
                            onChange={onChange}
                            placeholder="Email"
                        />
                        <Input
                            icon="lock"
                            type="password"
                            name="password"
                            onChange={onChange}
                            placeholder="Senha"
                        />
                        <FormReset>
                            <a href="">Esqueceu a senha?</a>
                        </FormReset>
                        <Button
                            type="submit"
                            disabled={
                                !values.email || !values.password || loading
                            }
                        >
                            Entrar
                        </Button>
                        <FormFooter>
                            Ainda não tem Pocket? <a href="">Cadastre-se</a>
                        </FormFooter>
                    </div>
                </FormEntrar>
            </ColumnLeft>
            <ColumnRight>
                <ImageStyles src="/images/login.png" alt="" />
            </ColumnRight>
        </PageEntrar>
    );
};

export default EntrarPage;
