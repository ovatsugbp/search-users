import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="header__list">
                    <li className="header__item">
                        <Link to="/">Voltar</Link>
                    </li>
                    <li className="header__item">Bem-vindo (a)</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
