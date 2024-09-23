import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

const Table = ({
  columnsConfig,
  data,
  header,
  globalFilter,
  className,
  row,
  loading,
  headerClassName,
}) => {
  return (
    <>
      <DataTable
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        paginator
        value={data}
        loading={loading}
        rows={row ? row : 5}
        globalFilter={globalFilter}
        resizableColumns
        header={header}
        // Puede hacer quie aparezca el scroll cuando el max width es menor
        className={` ${className} w-full min-h-[75vh]`}
      >
        {columnsConfig.map((column, index) => (
          <Column
            key={`table-${index}-${column}`}
            sortable={column.sortable}
            className="h-[4rem] border text-text_primary/80 border-bg_six/10 p-2 hover:bg-bg_secondary/10 transition font-robotoSlab_400 "
            resizeable
            headerClassName={`${headerClassName}`}
            field={column.field}
            align={'center'}
            body={column.body}
            header={column.header}
          />
        ))}
      </DataTable>
    </>
  )
}

export default Table
