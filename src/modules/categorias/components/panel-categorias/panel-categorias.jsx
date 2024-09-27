import React from "react"
import TableCategorias from "../table-categorias/tableCategorias"

const PanelCategorias = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-primary font-medium  ">Categorias</h2>
      </div>
      <div className="min-h-[75vh] rounded-md bg-white shadow ">
        <TableCategorias/>
      </div>
    </>
  )
}

export default PanelCategorias
