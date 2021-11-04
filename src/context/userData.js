import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/users/${users}`);
            setUsers(response.data);
        }
        // fetchData();
    }, [users]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserData() {
    const context = useContext(UserContext);
    const { users, setUsers } = context;
    return { users, setUsers };
}
