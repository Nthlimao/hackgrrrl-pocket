import React from "react";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Search from "../../components/Search";
import Helper from "../../components/Helper";

import InicioPage, {
    InicioContent,
    InicioBanner,
    InicioBannerItem,
    PartnersBanners,
    PartnersBannersItem,
    Categories,
    CategoriesTitle,
    CategoriesItem,
    CategoriesIcon,
} from "./inicio.styles";

const PageInicio = () => {
    return (
        <InicioPage>
            <Navbar />
            <Header>
                <Menu />
                <Search />
                <Helper />
            </Header>
            <div className="container">
                <InicioContent>
                    <InicioBanner>
                        <InicioBannerItem width="100%">
                            <h3>Rápido e Fácil</h3>
                            <p>
                                Escolha a categoria com a qual você mais de
                                identifica, responda as perguntas em seguida e
                                <br />
                                receba um cashback para gastar em qualquer uma
                                de nossas empresas parceiras
                            </p>
                        </InicioBannerItem>
                    </InicioBanner>
                    <PartnersBanners>
                        <PartnersBannersItem width="50%">
                            <img src="/images/partners/natura.png" alt="" />
                        </PartnersBannersItem>
                        <PartnersBannersItem width="50%">
                            <img
                                src="/images/partners/magazine_luiza.png"
                                alt=""
                            />
                        </PartnersBannersItem>
                    </PartnersBanners>
                    <Categories>
                        <CategoriesTitle>Categorias</CategoriesTitle>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-smartphone" />
                            </CategoriesIcon>
                            <p>Eletrônicos e Tecnologia</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-laptop" />
                            </CategoriesIcon>
                            <p>Informática</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-building" />
                            </CategoriesIcon>
                            <p>Loja de Departamento</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-basketball" />
                            </CategoriesIcon>
                            <p>Esportes e Lazer</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-home" />
                            </CategoriesIcon>
                            <p>Móveis, Casa e Decoração</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-bulb" />
                            </CategoriesIcon>
                            <p>Eletrodoméstico</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-makeup-brush" />
                            </CategoriesIcon>
                            <p>Beleza</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-glasses" />
                            </CategoriesIcon>
                            <p>Moda e Acessórios</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-backpack" />
                            </CategoriesIcon>
                            <p>Viagem e Turismo</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-star" />
                            </CategoriesIcon>
                            <p>Assinaturas e Serviços</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-cookie" />
                            </CategoriesIcon>
                            <p>Alimentos e Bebidas</p>
                        </CategoriesItem>
                        <CategoriesItem>
                            <CategoriesIcon>
                                <i className="fi-rr-doctor" />
                            </CategoriesIcon>
                            <p>Saúde</p>
                        </CategoriesItem>
                    </Categories>
                </InicioContent>
            </div>
        </InicioPage>
    );
};

export default PageInicio;
