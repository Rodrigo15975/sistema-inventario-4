import React from 'react'
import TableUsuario from '../table-usuarios/tableUsuario'

const PanelUsuarios = () => {
  return (
    <>
    
      <div>
      <h2 className="text-3xl text-primary font-medium max-md:text-center">Usuarios</h2>
      </div>
      <div className="min-h-[75vh] rounded-md bg-white shadow ">
        <TableUsuario />
      </div>
    </>
  )
}

export default PanelUsuarios
