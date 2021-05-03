import React from "react";
import Link from "next/link";
import ShortcutsComponent, { ShortcutsLink } from "./shortcuts.styles";

const Shortcuts = () => {
    return (
        <ShortcutsComponent>
            <Link href="/">
                <ShortcutsLink>Landing Page</ShortcutsLink>
            </Link>
            <Link href="/entrar">
                <ShortcutsLink>Login</ShortcutsLink>
            </Link>
            <Link href="/registrar">
                <ShortcutsLink>Cadastro</ShortcutsLink>
            </Link>
            <Link href="/complete">
                <ShortcutsLink>Complete o cadastro</ShortcutsLink>
            </Link>
            <Link href="/inicio">
                <ShortcutsLink>Inicio</ShortcutsLink>
            </Link>
            <Link href="/pergunta">
                <ShortcutsLink>Pergunta</ShortcutsLink>
            </Link>
        </ShortcutsComponent>
    );
};

export default Shortcuts;
