import React, { useState } from "react";
import { useUser } from "../../services/user/user.hooks";

import Input from "../../components/Input";
import Button from "../../components/Button";

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

const RegistrarPage = () => {
    const { submitRegister } = useUser();
    const [values, setValues] = useState({ email: "", password: "" });
    const [terms, setTerms] = useState(false);
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
            const { data } = await submitRegister({
                variables: { input: values },
            });

            if (data) {
                console.log(data);
                // sessionStorage.setItem("pocket-token", data.token);
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
        <PageRegistrar>
            <ColumnLeft>
                <LogoPageRegistrar>
                    <img src="/images/logo.png" alt="" />
                </LogoPageRegistrar>
                <ImageStyles src="/images/login-mobile.png" alt="" />
            </ColumnLeft>
            <ColumnRight>
                <FormRegistrar onSubmit={onSubmit}>
                    <FormTitle>
                        <span>Crie sua</span>
                        <span>conta na</span>
                        <span>Pocket!</span>
                    </FormTitle>
                    <FormSubtitle>
                        Ganhe dinheiro respondendo perguntas sobre publicidade
                        ;)
                    </FormSubtitle>
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
                        <FormCheckboxGroup htmlFor="terms">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                            />
                            <label htmlFor="terms"></label>
                            <p>
                                Aceito os <a href="">Termos de Uso</a> e{" "}
                                <a href="">Política de Privacidade</a>
                            </p>
                        </FormCheckboxGroup>
                        <Button
                            type="submit"
                            disabled={
                                !values.email ||
                                !values.password ||
                                !terms ||
                                loading
                            }
                        >
                            Criar conta
                        </Button>
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
