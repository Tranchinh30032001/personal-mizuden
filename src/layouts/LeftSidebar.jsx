/* eslint-disable indent */
import { useMemo, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { useBoundStore } from '../stores'
import { sidebarsPortal, sidebarsPortal2 } from '../configs/sidebar'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

const LeftSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const pageTitle = useBoundStore((state) => state.pageTitle)

  const dataLeftSidebar = useMemo(() => {
    switch (pageTitle) {
      case 'Dashboard':
        return sidebarsPortal
      case 'Dashboard2':
        return sidebarsPortal2
      default:
        return sidebarsPortal
    }
  }, [pageTitle])

  return (
    <div className='drawer lg:drawer-open w-fit'>
      <input id='sidebar-drawer' type='checkbox' className='drawer-toggle' />

      <div
        className={cn(
          'drawer-side h-[calc(100vh_-_var(--height-header))] bg-[#E3E8F0] border-r transition-all duration-300 ease-in-out',
          {
            '!w-[200px]': isExpanded
          }
        )}
      >
        <div
          className={cn(
            'flex justify-end p-1 bg-white rounded-lg relative top-1 hover:bg-blue-primary hover:text-white',
            {
              '-right-[150px]': isExpanded,
              'left-2': !isExpanded
            }
          )}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='btn btn-ghost btn-sm btn-circle transition-transform duration-300 ease-in-out'
          >
            {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        <ul className='menu menu-vertical px-2 gap-2 w-full'>
          {dataLeftSidebar.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className='flex items-center gap-4 text-[#0B47BC] hover:bg-[#0B47BC] hover:text-white rounded-lg p-3 transition-all duration-300 ease-in-out transform hover:scale-105'
              >
                <span className='text-xl transition-transform duration-300 ease-in-out'>
                  {item.icon}
                </span>
                {isExpanded && (
                  <span className='text-sm transition-opacity duration-300 ease-in-out selected_menu'>
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LeftSidebar
