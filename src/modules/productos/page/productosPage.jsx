import Panel from "@/components/common/container/panel"
import Header from "@/components/common/header/Header"
import PanelProductos from "../components/panel-productos/panel-productos"

const ProductosPage = () => {
  return (
    <>
      <Header />
      <Panel>
        <PanelProductos />
      </Panel>
    </>
  )
}

export default ProductosPage
