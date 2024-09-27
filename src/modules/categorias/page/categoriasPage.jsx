import Panel from "@/components/common/container/panel"
import Header from "@/components/common/header/Header"
import React from "react"
import PanelCategorias from "../components/panel-categorias/panel-categorias"

const CategoriasPage = () => {
  return (
    <>
      <Header />
      <Panel>
        <PanelCategorias />
      </Panel>
    </>
  )
}

export default CategoriasPage
