import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [users] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("/users/gustgoulart");
            console.log(response);
        }
        fetchData();
    }, []);
    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserData() {
    const context = useContext(UserContext);
    const { users } = context;
    return { users };
}
