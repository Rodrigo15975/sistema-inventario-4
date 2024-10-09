import React from "react"
import TableCategorias from "../table-categorias/tableCategorias"

const PanelCategorias = () => {
  return (
    <>
      <div>
      <h2 className="text-4xl bg-gradient-to-tl from-slate-800/20 via-blue-500 to-sky-300 bg-clip-text text-transparent font-medium max-md:text-center">Categorias</h2>
      </div>
      <div className="min-h-[75vh] rounded-md bg-white shadow ">
        <TableCategorias/>
      </div>
    </>
  )
}

export default PanelCategorias
