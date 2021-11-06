import React, { useState } from "react";

import { useUserData } from "../../context/userData";

import github from "../../assets/img/github-logo.png";
import Card from "../../components/Card";
import Input from "../../components/Input";

import "./style.css";

function Home() {
    const { users, setInputUser } = useUserData();

    const [inputValue, setInputValue] = useState("");
    const [isCardShowing, setIsCardShowing] = useState(false);

    const getInputValue = (value, key) => {
        setInputValue(value);
        if (key === "Enter") searchUser();
    };

    const searchUser = () => {
        setInputUser(inputValue);
        setIsCardShowing(true);
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
                            changeInput={(value, key) =>
                                getInputValue(value, key)
                            }
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
                {isCardShowing ? (
                    <Card user={users} />
                ) : (
                    <img
                        className="home__git-logo"
                        src={github}
                        alt="github logo"
                        width="500"
                    />
                )}
            </section>
        </main>
    );
}

export default Home;
