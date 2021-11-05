import React, { useState } from "react";

import { useUserData } from "../../context/userData";

import Card from "../../components/Card";
import Input from "../../components/Input";

import "./style.css";

function Home() {
    const { users, setUsers } = useUserData();

    const [inputValue, setInputValue] = useState("");

    const getInputValue = (value) => {
        setInputValue(value);
    };

    const searchUser = () => {
        setUsers(inputValue);
    };

    return (
        <main className="home">
            <section className="home__container">
                <div className="home__search-container">
                    <h1 className="home__title">GitHub Users</h1>
                    <div className="home__input-container">
                        <Input
                            type="text"
                            placeholder="Digite o nome de usuário que você deseja buscar"
                            changeInput={(value) => getInputValue(value)}
                        />
                        <span
                            className="material-icons home__search-icon"
                            onClick={searchUser}
                        >
                            search
                        </span>
                    </div>
                </div>
            </section>
            <section className="home__container">
                <Card user={users} />
            </section>
        </main>
    );
}

export default Home;
