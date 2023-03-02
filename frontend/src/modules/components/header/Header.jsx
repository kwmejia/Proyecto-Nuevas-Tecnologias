import { useContext, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthContext';
import './header.scss'
import { NavLink } from 'react-router-dom';
export const Header = () => {

  const {
    user,
    logIn,
    onFailure,
    isLogged,
    logOut,
    alert
  } = useContext(AuthContext);

  useEffect(() => {
    if (alert) Swal.fire(alert);
  }, [alert])

  const handleScroll = (e) => {
    console.log(e)
  }

  return (
    <header className="container-header d-flex justify-content-end align-items-center" onScroll={handleScroll}>
      <nav className="nav-items d-flex w-100 justify-content-around">
        <a href="/">
          <img src="/img/corgi (1).png" height={45} alt="" />
        </a>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/quienes-somos">Quienes somos</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/contacto">contacto</NavLink>

        <div className="auth-container mx-4">

          {isLogged
            ? (
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-success" onClick={logOut}>Cerrar Sesión</button>
                <p className="p-0">{user?.rol}</p>
                <img className="avatar-user rounded-circle" width={50} src={user?.picture} />
                {/* <div className="d-middle-center">
                  <p className="m-0">{user?.name}</p>
                  <p className="p-0">{user?.email}</p>
                </div> */}
              </div>
            )
            : (
              <GoogleLogin
                onSuccess={(data) => logIn(data)}
                onError={onFailure}
              />
            )
          }

        </div>
      </nav>
    </header>
  );
}




{/* <div className="auth-container mx-4">

        {isLogged
          ? (
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-success" onClick={logOut}>Cerrar Sesión</button>
              <p className="p-0">{user?.rol}</p>
              <img className="avatar-user rounded-circle" width={50} src={user?.picture} />
              <div className="d-middle-center">
                <p className="m-0">{user?.name}</p>
                <p className="p-0">{user?.email}</p>
              </div>
            </div>
          )
          : (
            <GoogleLogin
              onSuccess={(data) => logIn(data)}
              onError={onFailure}
            />
          )
        }

      </div> */}