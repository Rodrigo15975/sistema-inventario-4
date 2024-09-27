import React from "react"
import TableProductos from "../table-productos/tableProductos"

const PanelProductos = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-primary font-medium  ">Productos</h2>
      </div>
      <div className="min-h-[75vh] rounded-md bg-white shadow ">
        <TableProductos />
      </div>
    </>
  )
}

export default PanelProductos
