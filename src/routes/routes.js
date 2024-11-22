import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Navigate, useNavigate } from 'react-router-dom'

const Router = () => {
  const [isAuth, setIsAuth] = useState(false)
  const user = Storage('usuario')

  const navigate = useNavigate()

  useEffect(() => {
    const verificarUltimoLogin = () => {
      if (!user) {
        setIsAuth(false)
        return
      }

      const ultimoLogin = user?.logado_em
      const pathname = window.location.pathname

      if (!ultimoLogin || dayjs(ultimoLogin).date() !== dayjs().date()) {
        setIsAuth(false)
      } else if (pathname.endsWith('lista') && !user?.logado_em) {
        setIsAuth(false)
      } else {
        setIsAuth(true)
      }
    }

    verificarUltimoLogin()
  }, [user])

  useEffect(() => {
    if(!isAuth)
      navigate('/')
  },[isAuth])

  return <AuthRoutes/>
}

export default Router
