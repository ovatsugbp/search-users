import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [inputUser, setInputUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [repos, setRepos] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseUserData = await api.get(`/users/${inputUser}`);
                const responseUserRepos = await api.get(
                    `/users/${inputUser}/repos`
                );

                setHasError(false);
                setUsers(responseUserData.data);
                setRepos(responseUserRepos.data);
            } catch (error) {
                setHasError(true);
            }
        }
        fetchData();
    }, [inputUser]);
    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                repos,
                inputUser,
                setInputUser,
                hasError,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUserData() {
    const context = useContext(UserContext);
    const { users, setUsers, repos, inputUser, setInputUser, hasError } =
        context;
    return { users, setUsers, repos, inputUser, setInputUser, hasError };
}
