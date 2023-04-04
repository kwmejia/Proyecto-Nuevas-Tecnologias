import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import clientHTTP from '../config/configAxios.js'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  const [isLogged, setIsLogged] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [alert, setAlert] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem('token')) loadInfo()
  }, [])

  const loadInfo = () => {
    setUser(JSON.parse(localStorage.getItem('user')))
    setIsLogged(true)
  }

  const logIn = async (response) => {
    try {
      let userData = jwt_decode(response.credential)
      const res = await clientHTTP.get(`/emailsVeterinarian/${userData.email}`);
      (!res.data.error)
        ? userData = { ...userData, rol: 'veterinario' }
        : userData = { ...userData, rol: 'cliente' }

      setUser(userData)
      setIsLogged(true)

      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', response.credential)
      setAlert({ title: 'Logueado correctamente', icon: 'success' })
    } catch (error) {
      setIsLogged(false)
      setAlert({ title: '!Oops ocurrio un error', icon: 'error' })
      console.log(error)
    }
  }

  const onFailure = () => {
    console.log('Something went wrong')
  }

  const logOut = () => {
    localStorage.clear()
    setUser(undefined)
    sessionStorage.clear()
    setIsLogged(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logIn,
        onFailure,
        isLogged,
        logOut,
        isLoading,
        alert
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
