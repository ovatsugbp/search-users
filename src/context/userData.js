/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint linebreak-style: ["error", "windows"] */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import api from '../services/api';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [inputUser, setInputUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseUserData = await api.get(`/users/${inputUser}`);
        const responseUserRepos = await api.get(
          `/users/${inputUser}/repos`,
        );

        setHasError(false);
        setUsers(responseUserData.data);
        setRepos(responseUserRepos.data);
        setIsLoading(false);
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
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserContext);
  const {
    users, setUsers, repos, inputUser, setInputUser, hasError, isLoading,
  } = context;
  return {
    users, setUsers, repos, inputUser, setInputUser, hasError, isLoading,
  };
}
