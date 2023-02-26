import { createContext, useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) loadInfo();
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  }, []);


  const clientID = "935186823946-qcm7951fh404bcm76bn99to8v25i94s7.apps.googleusercontent.com";

  const loadInfo = () => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setIsLogged(true);
  }

  const onSuccess = (response) => {
    setUser(response.profileObj);
    localStorage.setItem("token", response.tokenId);
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    document.getElementsByClassName("btn").hidden = true;
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
        onSuccess,
        onFailure,
        clientID,
        isLogged,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
