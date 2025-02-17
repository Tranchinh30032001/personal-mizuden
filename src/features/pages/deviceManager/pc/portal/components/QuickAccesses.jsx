import QuickAccess from '@/components/shared/QuickAccess'
import Title from '@/components/ui/Title/Title'
import { FaPlus } from 'react-icons/fa6'
import { LuClipboardList } from 'react-icons/lu'
import { IoBuildOutline } from 'react-icons/io5'
import { MdOutlineAddHomeWork } from 'react-icons/md'
import { ROUTES } from '@/configs/routes'

const QuickAccesses = () => {
  return (
    <section>
      <Title>クイックアクセス</Title>
      <div className='flex my-3 gap-3'>
        <QuickAccess
          icon={<FaPlus size={28} className='text-blue-primary' />}
          text={'新規案件作成'}
          href={ROUTES.portal}
        />
        <QuickAccess
          icon={<LuClipboardList size={28} className='text-blue-primary' />}
          text={'案件一覧'}
          href={ROUTES.portal}
        />
        <QuickAccess
          icon={<IoBuildOutline size={28} className='text-blue-primary' />}
          text={'出張修理一覧'}
          href={ROUTES.portal}
        />
        <QuickAccess
          icon={<MdOutlineAddHomeWork size={28} className='text-blue-primary' />}
          text={'ハウス関連資料'}
          href={ROUTES.portal}
        />
      </div>
    </section>
  )
}

export default QuickAccesses
