import React from "react"
import TableProveedores from "../table-proveedores/table-proveedores"

const PanelProveedores = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-primary font-medium  ">Proveedores</h2>
      </div>
      <div className="min-h-[75vh] rounded-md bg-white shadow ">
        <TableProveedores />
      </div>
    </>
  )
}

export default PanelProveedores
