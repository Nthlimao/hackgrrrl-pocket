import React from "react";
import HeaderComponent, { HeaderComponentInner } from "./header.styles";

const Header = ({ children }) => {
    return (
        <HeaderComponent>
            <div className="container">
                <HeaderComponentInner>{children}</HeaderComponentInner>
            </div>
        </HeaderComponent>
    );
};

export default Header;
