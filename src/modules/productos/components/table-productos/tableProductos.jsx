import Table from "@/components/common/Table/Table"
import React from "react"
import TableHeader from "./table-header"

const TableProductos = () => {
  const columns = [
    {
      header: "Dni",
      field: "dni",
      sortable: true,
      filter: true,
    },
    {
      header: "Name",
      field: "name",
    },
    {
      header: "Lastname",
      field: "lastname",
    },
    {
      header: "Phone",
      field: "phone",
    },
    {
      header: "Role",
      field: "role.role",
    },
    {
      header: "Acciones",
    },
  ]

  return (
    <div>
      <Table
        columnsConfig={columns}
        data={[
          {
            name: "hola",
          },
        ]}
        headerClassName={"text-white"}
        className={"poppins"}
        globalFilter={""}
        header={<TableHeader />}
      />
    </div>
  )
}

export default TableProductos
