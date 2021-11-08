/* eslint-disable import/named */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

import { Link } from 'react-router-dom';

import { useUserData } from '../../context/userData';

import './style.css';

function Card() {
  const { users, hasError, isLoading } = useUserData();

  if (isLoading) return <p className="text-center"> Carregando...</p>;

  return (
    <>
      {hasError ? (
        <article className="card align-center">
          <p className="text-center">
            Desculpe, nenhum usuário encontrado ):
          </p>
        </article>
      ) : (
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
              <button className="card__button">
                <span>Ver página</span>
                <svg>
                  <polyline
                    className="o1"
                    points="0 0, 150 0, 150 55, 0 55, 0 0"
                  />
                  <polyline
                    className="o2"
                    points="0 0, 150 0, 150 55, 0 55, 0 0"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </article>
      )}
    </>
  );
}

export default Card;
