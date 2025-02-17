import { getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table'

const useTableInstance = (columns, data) => {
  return useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })
}

export default useTableInstance
