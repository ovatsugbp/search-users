import React from "react";
import "./style.css";

function Card({ user }) {
    console.log(user);
    return (
        <>
            <article className="card">
                <div className="card__top">
                    <div className="card__photo-content">
                        <div className="card__photo-bkg">
                            <img
                                className="card__photo"
                                src={user.avatar_url}
                                title={user.name}
                                alt={user.name}
                            />
                        </div>
                    </div>
                    <span className="card__user-name">{user.name}</span>
                    <hr className="card__division" />
                </div>
                <div className="card__bottom">
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
                </div>
            </article>
        </>
    );
}

export default Card;
