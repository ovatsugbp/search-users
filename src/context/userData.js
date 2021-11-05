import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const responseUserData = await api.get(`/users/${users}`);
            const responseUserRepos = await api.get(`/users/${users}/repos`);

            setUsers(responseUserData.data);
            setRepos(responseUserRepos.data);
        }
        fetchData();
    }, [users]);
    return (
        <UserContext.Provider value={{ users, setUsers, repos }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserData() {
    const context = useContext(UserContext);
    const { users, setUsers, repos } = context;
    return { users, setUsers, repos };
}
