import React from "react";

import { Link } from "react-router-dom";

import { useUserData } from "../../context/userData";

import "./style.css";

function Card() {
    const { users } = useUserData();

    return (
        <>
            <article className="card">
                <div className="card__top">
                    <div className="card__photo-content">
                        <div className="card__photo-bkg">
                            <img
                                className="card__photo"
                                src={users.avatar_url}
                                title={users.name}
                                alt={users.name}
                                width="100"
                                height="100"
                            />
                        </div>
                    </div>
                    <span className="card__user-name">{users.name}</span>
                    <hr className="card__division" />
                </div>
                <div className="card__bottom">
                    <Link to={`/${users.id}`}>
                        <button class="card__button">
                            <span>Ver página</span>
                            <svg>
                                <polyline
                                    class="o1"
                                    points="0 0, 150 0, 150 55, 0 55, 0 0"
                                ></polyline>
                                <polyline
                                    class="o2"
                                    points="0 0, 150 0, 150 55, 0 55, 0 0"
                                ></polyline>
                            </svg>
                        </button>
                    </Link>
                </div>
            </article>
        </>
    );
}

export default Card;
