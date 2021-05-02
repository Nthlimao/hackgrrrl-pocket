import React from "react";
import Link from "next/link";

import NavbarComponent, {
    NavbarInner,
    NavbarLinkPocket,
    NavbarMenu,
    NavbarMenuLink,
} from "./navbar.styles";

const Navbar = () => {
    return (
        <NavbarComponent>
            <div className="container">
                <NavbarInner>
                    <NavbarLinkPocket href="">
                        <img src="/images/logo-white.png" alt="" />
                    </NavbarLinkPocket>
                    <NavbarMenu>
                        <Link href="/entrar">
                            <NavbarMenuLink>Entrar</NavbarMenuLink>
                        </Link>
                        <Link href="/registrar">
                            <NavbarMenuLink>Cadastrar</NavbarMenuLink>
                        </Link>
                    </NavbarMenu>
                </NavbarInner>
            </div>
        </NavbarComponent>
    );
};

export default Navbar;
