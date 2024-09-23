import Layout from '@/layout/layout'
import { storeAuth } from '@/modules/login/store/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

/* eslint-disable react/prop-types */
const ProtectedRouter = () => {
  const location = useLocation()
  const { isAuth } = storeAuth()

  if (isAuth)
    return (
      <Layout>
        <Outlet />
      </Layout>
    )

  return (
    <Navigate
      to={'/'}
      replace={true}
      // Obtiene el valor de la ubicacion de donde proviene antes de redireccionarlo
      state={{ from: location }}
    />
  )
}

export default ProtectedRouter
