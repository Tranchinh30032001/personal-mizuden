import ModalSwitcher from '@/features/common/ModalSwitcher'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import PersistedOutlet from '@features/common/PersistedOutlet'
import useMediaQuery from '@/hooks/useMediaQuery'
import { MEDIA_QUERY } from '@/constants/global'

const MainLayout = () => {
  const desktop = useMediaQuery(MEDIA_QUERY.DESKTOP)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex overflow-hidden'>
        {desktop && <LeftSidebar />}
        <main className='flex flex-1 overflow-auto px-4 pt-2 pb-4 bg-gray-container h-[calc(100vh_-_var(--height-header))]'>
          <PersistedOutlet />
        </main>
      </div>
      <ModalSwitcher />
    </div>
  )
}

export default MainLayout
