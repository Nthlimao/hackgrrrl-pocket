import React from "react";
import Link from "next/link";

import Navbar from "../components/Navbar";

import HomePage, {
    HomeInner,
    HomeBanner,
    BannerContent,
    BannerTitle,
    BannerSubtitle,
    CallToAction,
} from "./home.styles";

const PageHome = () => {
    return (
        <HomePage>
            <Navbar />
            <HomeInner>
                <div className="container">
                    <HomeBanner>
                        <BannerContent>
                            <BannerTitle>
                                Ganhe <span>cashback</span> respondendo{" "}
                                <span>perguntas</span>
                            </BannerTitle>
                            <BannerSubtitle>
                                Responda perguntas rápidas sobre{" "}
                                <strong>propagandas</strong>, ajude a
                                publicidade e seja pago por isso!{" "}
                                <strong>É rápido e fácil.</strong>
                            </BannerSubtitle>
                            <Link href="/registrar">
                                <CallToAction>Cadastre-se agora</CallToAction>
                            </Link>
                        </BannerContent>
                        <div>
                            <img src="/images/home-image.png" alt="" />
                        </div>
                    </HomeBanner>
                </div>
            </HomeInner>
        </HomePage>
    );
};

export default PageHome;
