import React from "react";
import "./style.css";

function UserProfile() {
    const user = {
        avatar_url: "https://avatars.githubusercontent.com/u/57936?v=4",
        bio: null,
        blog: "",
        company: null,
        created_at: "2009-02-25T19:01:55Z",
        email: null,
        events_url: "https://api.github.com/users/example/events{/privacy}",
        followers: 21,
        followers_url: "https://api.github.com/users/example/followers",
        following: 0,
        following_url:
            "https://api.github.com/users/example/following{/other_user}",
        gists_url: "https://api.github.com/users/example/gists{/gist_id}",
        gravatar_id: "",
        hireable: null,
        html_url: "https://github.com/example",
        id: 57936,
        location: null,
        login: "example",
        name: "Example",
        node_id: "MDQ6VXNlcjU3OTM2",
        organizations_url: "https://api.github.com/users/example/orgs",
        public_gists: 0,
        public_repos: 1,
        received_events_url:
            "https://api.github.com/users/example/received_events",
        repos_url: "https://api.github.com/users/example/repos",
        site_admin: false,
        starred_url:
            "https://api.github.com/users/example/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/example/subscriptions",
        twitter_username: null,
        type: "User",
        updated_at: "2019-08-22T16:25:57Z",
        url: "https://api.github.com/users/example",
    };
    return (
        <main className="user-profile">
            <section className="user-profile__container">
                <div className="user-profile__left">
                    <div className="user-profile__photo-content">
                        <div className="user-profile__photo-bkg">
                            <img
                                className="user-profile__photo"
                                src={user.avatar_url}
                                title={user.name}
                                alt={user.name}
                                width="400"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
                <div className="user-profile__right">
                    <p className="text-center bold">{user.name}</p>
                    <p>Repositórios públicos: {user.public_repos}</p>
                </div>
            </section>
        </main>
    );
}

export default UserProfile;
