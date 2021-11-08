/* eslint-disable import/named */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

import { useUserData } from '../../context/userData';

import './style.css';

function UserProfile() {
  const { users, repos } = useUserData();

  return (
    <main className="user-profile">
      <section className="user-profile__container">
        <div className="user-profile__left">
          <div className="user-profile__photo-content">
            <div className="user-profile__photo-bkg">
              <img
                className="user-profile__photo"
                src={users.avatar_url}
                title={users.name}
                alt={users.name}
                width="400"
                height="400"
              />
            </div>
          </div>
          <p className="text-center bold user-profile__text">
            {users.name}
          </p>
          <p className="text-center user-profile__text">
            Repositórios públicos:
            {' '}
            {users.public_repos}
          </p>
        </div>
        <div className="user-profile__right">
          <p className="text-center mb-20 user-profile__text">
            Lista de repositórios
          </p>
          <div className="user-profile__repositories">
            <ul className="user-profile__repo-list">
              {repos.map((repo) => (
                <li className="user-profile__repo-item">
                  <a
                    className="user-profile__link"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                  </a>
                  <span>{repo.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;
