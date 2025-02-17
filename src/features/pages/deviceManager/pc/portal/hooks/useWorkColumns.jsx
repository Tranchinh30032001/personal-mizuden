import { GoInfo } from 'react-icons/go'

const useWorkColumns = () => {
  return [
    {
      accessorFn: (row) => row['詳細'],
      id: 'col1',
      header: '詳細',
      size: 40,
      cell: () => (
        <div className='flex justify-center'>
          <GoInfo size={24} className='text-blue-secondary cursor-pointer' />
        </div>
      )
    },
    {
      accessorFn: (row) => row['案件状況'],
      id: 'col2',
      header: '案件状況',
      size: 70,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['案件番号'],
      id: 'col3',
      header: ' 案件番号',
      size: 125,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['得意先名'],
      id: 'col4',
      header: '得意先名',
      size: 125,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['得意先支店名'],
      id: 'col5',
      header: '得意先支店名',
      size: 132,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['得意先担当者'],
      id: 'col6',
      header: ' 得意先担当者',
      size: 125,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['案件名'],
      id: 'col7',
      header: '案件名（現場名）',
      size: 239,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['営業所'],
      id: 'col8',
      header: '営業所',
      size: 81,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['営業担当者'],
      id: 'col9',
      header: '営業担当者',
      size: 125,
      cell: ({ getValue }) => <div>{getValue()}</div>
    },
    {
      accessorFn: (row) => row['確認内容'],
      id: 'col10',
      header: '確認内容',
      size: 500,
      cell: ({ getValue }) => (
        <div className='max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap'>
          {getValue()}
        </div>
      )
    }
  ]
}

export default useWorkColumns
