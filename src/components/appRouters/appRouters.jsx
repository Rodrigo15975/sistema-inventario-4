import { Route, Routes } from 'react-router-dom'
import ProtectedRouter from './ProtectedRouter'
import { routerProtected } from '@/router/routerProtected'
import { routerPublics } from '@/router/routerPublic'
import NotFound from './notFound'

const AppRouter = () => {
  return (
    <Routes>
      {/* Aca pones el componente Autenticado , donde solo peuda el auth */}
      <Route element={<ProtectedRouter />}>
        {routerProtected.map(({ Componente, path }) => (
          <Route key={path} path={path} element={<Componente />} />
        ))}
      </Route>

      {routerPublics.map(({ Componente, path }) => (
        <Route key={path} path={path} element={<Componente />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
