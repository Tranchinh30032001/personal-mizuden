import { useMemo, useState } from 'react'
import DataViewTable from '@/components/shared/DataViewTable'
import Pagination from '@/components/shared/Pagination'
import Title from '@/components/ui/Title/Title'
import useWorkColumns from '../hooks/useWorkColumns'
import useTableInstance from '@/hooks/useTableInstance'
// import { useSearchWorkMutation } from '@/services/hooks/work'

const ITEM_PER_PAGE = 10

const WorkTable1 = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const respData = useMemo(() => ({ count: data.length, info: data }), []) // mock data
  const tableRows = useMemo(() => {
    const rows = respData?.info?.map((row) => row.Work_info)
    rows.length = ITEM_PER_PAGE
    return rows
  }, []) // temporarity convert data to format transfer to hook
  // const { mutate, isPending, data } = useSearchWorkMutation()

  const columns = useWorkColumns()
  const tableInstance = useTableInstance(columns, tableRows)

  return (
    <section className='space-y-2'>
      <Title>タスク一覧</Title>
      <DataViewTable tableInstance={tableInstance} rowsNumber={ITEM_PER_PAGE} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalData={respData.count}
        itemPerPage={ITEM_PER_PAGE}
      />
    </section>
  )
}

export default WorkTable1

// mock data
var data = [
  {
    Work_info: {
      詳細: 'info',
      案件状況: '建方完了',
      案件番号: '042204800002',
      得意先名: '○○建設',
      得意先支店名: 'ミトマ',
      得意先担当者: '○○ビル',
      案件名: '○○ビル',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容:
        '返却予定日が近づいています。備品センターへ解体日程の調整を依頼してください。11111111111111111111111111111111111111111111111111111'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '受注',
      案件番号: '042204800003',
      得意先名: '○○建設',
      得意先支店名: 'ミナミノ',
      得意先担当者: '○ズデンキ',
      案件名: '○ズデンキ',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '受注伝票が作成されていません。受注伝票を作成してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '建方完了',
      案件番号: '042204800002',
      得意先名: '○○建設',
      得意先支店名: 'ミトマ',
      得意先担当者: '○○ビル',
      案件名: '○○ビル',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '返却予定日が近づいています。備品センターへ解体日程の調整を依頼してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '受注',
      案件番号: '042204800003',
      得意先名: '○○建設',
      得意先支店名: 'ミナミノ',
      得意先担当者: '○ズデンキ',
      案件名: '○ズデンキ',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '受注伝票が作成されていません。受注伝票を作成してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '建方完了',
      案件番号: '042204800002',
      得意先名: '○○建設',
      得意先支店名: 'ミトマ',
      得意先担当者: '○○ビル',
      案件名: '○○ビル',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '返却予定日が近づいています。備品センターへ解体日程の調整を依頼してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '受注',
      案件番号: '042204800003',
      得意先名: '○○建設',
      得意先支店名: 'ミナミノ',
      得意先担当者: '○ズデンキ',
      案件名: '○ズデンキ',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '受注伝票が作成されていません。受注伝票を作成してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '建方完了',
      案件番号: '042204800002',
      得意先名: '○○建設',
      得意先支店名: 'ミトマ',
      得意先担当者: '○○ビル',
      案件名: '○○ビル',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '返却予定日が近づいています。備品センターへ解体日程の調整を依頼してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '受注',
      案件番号: '042204800003',
      得意先名: '○○建設',
      得意先支店名: 'ミナミノ',
      得意先担当者: '○ズデンキ',
      案件名: '○ズデンキ',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '受注伝票が作成されていません。受注伝票を作成してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '建方完了',
      案件番号: '042204800002',
      得意先名: '○○建設',
      得意先支店名: 'ミトマ',
      得意先担当者: '○○ビル',
      案件名: '○○ビル',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '返却予定日が近づいています。備品センターへ解体日程の調整を依頼してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '受注',
      案件番号: '042204800003',
      得意先名: '○○建設',
      得意先支店名: 'ミナミノ',
      得意先担当者: '○ズデンキ',
      案件名: '○ズデンキ',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '受注伝票が作成されていません。受注伝票を作成してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '建方完了',
      案件番号: '042204800002',
      得意先名: '○○建設',
      得意先支店名: 'ミトマ',
      得意先担当者: '○○ビル',
      案件名: '○○ビル',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '返却予定日が近づいています。備品センターへ解体日程の調整を依頼してください。'
    }
  },
  {
    Work_info: {
      詳細: 'info',
      案件状況: '受注',
      案件番号: '042204800003',
      得意先名: '○○建設',
      得意先支店名: 'ミナミノ',
      得意先担当者: '○ズデンキ',
      案件名: '○ズデンキ',
      営業所: '岡山',
      営業担当者: '営業 太郎',
      確認内容: '受注伝票が作成されていません。受注伝票を作成してください。'
    }
  }
]
