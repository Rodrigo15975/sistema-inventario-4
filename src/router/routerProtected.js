import CategoriasPage from '@/modules/categorias/page/categoriasPage'
import PageDashboard from '@/modules/dashboard/pages/pageDashboard'
import ProductosPage from '@/modules/productos/page/productosPage'
import UsuariosPage from '@/modules/usuarios/page/usuariosPage'
import { pathRouter } from './path-router'
import ProvedoresPage from '@/modules/provedores/page/provedoresPage'

export const routerProtected = [
  {
    path: pathRouter.dashboard,
    Componente: PageDashboard,
  },
  {
    path: pathRouter.categorias,
    Componente: CategoriasPage,
  },
  {
    path: pathRouter.productos,
    Componente: ProductosPage,
  },
  {
    path: pathRouter.usuarios,
    Componente: UsuariosPage,
  },
  {
    path: pathRouter.provedores,
    Componente: ProvedoresPage,
  },
]
