import { CiViewList } from "react-icons/ci"
import { FaUsers } from "react-icons/fa6"
import { LiaLuggageCartSolid } from "react-icons/lia"
import { LuLayoutDashboard } from "react-icons/lu"
import { labelRouter, pathRouter } from "../../router/path-router"
import { AiFillContainer } from "react-icons/ai"

export const linksGeneral = [
  {
    label: labelRouter.dashboard,
    path: pathRouter.dashboard,
    icon: <LuLayoutDashboard />,
  },
  {
    label: labelRouter.provedores,
    path: pathRouter.provedores,
    icon: <AiFillContainer />,
  },
  {
    label: labelRouter.usuarios,
    path: pathRouter.usuarios,
    icon: <FaUsers />,
  },
  {
    label: labelRouter.productos,
    path: pathRouter.productos,
    icon: <LiaLuggageCartSolid />,
  },
  {
    label: labelRouter.categorias,
    path: pathRouter.categorias,
    icon: <CiViewList />,
  },
]
