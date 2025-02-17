import { flexRender } from '@tanstack/react-table'

/**
 * DataViewTable component renders a table using the provided table instance.
 * It displays headers and rows based on the table instance's configuration.
 *
 * @param {Object} props - Component props
 * @param {Object} props.tableInstance - The table instance containing methods and data for rendering the table.
 * @param {number} props.rowsNumber - The total number of rows shown in this table.
 */
const DataViewTable = ({ tableInstance, rowsNumber }) => {
  const emptyRowsNumber = rowsNumber - tableInstance.getRowModel().rows.length

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-fixed border-separate border-spacing-1 font-japan text-sm'>
        <thead className='select-none'>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='text-left space-x-2'>
              {headerGroup.headers.map((header, index) => (
                <td
                  className='bg-gray-container'
                  key={header.id + index}
                  style={{ minWidth: header.getSize() }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='*:select-none'>
          {/* Content rows */}
          {tableInstance.getRowModel().rows.map((rowGroup) => (
            <tr key={rowGroup.id} className='table_row_shadow'>
              {rowGroup.getVisibleCells().map((cell, index) => (
                <td key={cell.id + index}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          {/* Empty rows */}
          {emptyRowsNumber > 0 &&
            Array.from({ length: emptyRowsNumber }).map((_, idx) => (
              <tr key={idx} className='*:h-[1.625rem] table_row_shadow'>
                {tableInstance.getHeaderGroups()[0].headers.map((cell, index) => (
                  <td key={cell.id + index}></td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataViewTable
