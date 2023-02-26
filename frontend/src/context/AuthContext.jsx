import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) loadInfo();
  }, []);


  const loadInfo = () => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setIsLogged(true);
  }

  const logIn = (response) => {
    const decoded = jwt_decode(response.credential);
    setUser(decoded);
    localStorage.setItem("token", response.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    setIsLogged(true);
  }

  const onFailure = () => {
    console.log("Something went wrong");
  }

  const logOut = () => {
    localStorage.clear();
    setUser(undefined);
    sessionStorage.clear();
    setIsLogged(false);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logIn,
        onFailure,
        isLogged,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
