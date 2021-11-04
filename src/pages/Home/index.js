import React from "react";

import { useUserData } from "../../context/userData";

import Card from "../../components/Card";
import Input from "../../components/Input";

import "./style.css";

function Home() {
    const { users } = useUserData();

    return (
        <main className="home">
            <section className="home__search-container">
                <h1 className="home__title">GitHub Users</h1>
                <div className="home__input-container">
                    <Input
                        type="text"
                        placeholder="Digite o nome de usuário que você deseja buscar"
                    />
                    <span className="material-icons home__search-icon">
                        search
                    </span>
                </div>
            </section>
            <section className="home__user-container">
                <Card user={users} />
            </section>
        </main>
    );
}

export default Home;
