import Panel from "@/components/common/container/panel"
import Header from "@/components/common/header/Header"
import PanelProveedores from "../components/panel-proveedores/panel-proveedores"

const ProvedoresPage = () => {
  return (
    <>
      <Header />
      <Panel>
        <PanelProveedores />
      </Panel>
    </>
  )
}

export default ProvedoresPage
