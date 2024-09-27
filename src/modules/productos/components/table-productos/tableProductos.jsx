import Table from '@/components/common/Table/Table'
import React from 'react'
import TableHeader from './table-header'

const TableProductos = () => {
  return (
    <div>
      <Table
        columnsConfig={[]}
        data={[
          {
            name: 'rodrigo',
          },
        ]}
        className={'poppins'}
        globalFilter={''}
        header={<TableHeader />}
      />
    </div>
  )
}

export default TableProductos
