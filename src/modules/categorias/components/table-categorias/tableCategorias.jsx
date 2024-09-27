import Table from "@/components/common/Table/Table"
import React from "react"
import TableHeader from "./table-header"

const TableCategorias = () => {
  return (
    <>
      <Table
        columnsConfig={[]}
        data={[
          {
            name: "rodrigo",
          },
        ]}
        className={"poppins"}
        globalFilter={""}
        header={<TableHeader />}
      />
    </>
  )
}

export default TableCategorias
