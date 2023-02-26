import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import GoogleLogin from 'react-google-login';
import './header.scss'
export const Header = () => {

  const {
    user,
    onSuccess,
    onFailure,
    clientID,
    isLogged,
    logOut
  } = useContext(AuthContext);

  return (
    <header className="container-header d-flex justify-content-end align-items-center">

      <div className="auth-container mx-4">

        {isLogged
          ? (
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-success" onClick={logOut}>Cerrar Sesión</button>
              <img className="avatar-user rounded-circle" width={50} src={user?.imageUrl} />
              <div className="d-middle-center">
                <p className="m-0">{user?.name}</p>
                <p className="p-0">{user?.email}</p>
              </div>
            </div>
          )
          : (
            <GoogleLogin
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Iniciar sesion"
              cookiePolicy={"single_host_origin"}
            />
          )
        }

      </div>
    </header>
  );
}
