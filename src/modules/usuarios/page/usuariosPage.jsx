import Panel from '@/components/common/container/panel'
import Header from '@/components/common/header/Header'
import PanelUsuarios from '../components/panel-usuarios/panel-usuarios'

const UsuariosPage = () => {
  return (
    <>
      <Header />
      <Panel>
        <PanelUsuarios />
      </Panel>
    </>
  )
}

export default UsuariosPage
