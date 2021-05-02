import React from "react";
// import Link from "next/link";

import MenuComponent, { MenuLink } from "./menu.styles";

const Menu = () => {
    return (
        <MenuComponent>
            <MenuLink>Lojas</MenuLink>
            <MenuLink>Promoções</MenuLink>
        </MenuComponent>
    );
};

export default Menu;
