import { useRef, useEffect } from 'react'
import { FaUser, FaCaretDown, FaSignOutAlt, FaCog } from 'react-icons/fa'

const Header = () => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.querySelector('ul')?.classList.add('hidden')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    const dropdownContent = dropdownRef.current?.querySelector('ul')
    dropdownContent?.classList.toggle('hidden')
  }

  return (
    <header className='bg-blue-primary h-[var(--height-header)] px-4 py-2'>
      <div className='flex items-center justify-between'>
        <a href='/' className='flex items-center gap-2 text-white hover:opacity-90'>
          <span className='text-xl font-medium'>ハウス案件管理システム</span>
        </a>

        <div className='flex items-center gap-6'>
          <div className='dropdown dropdown-end z-50' ref={dropdownRef}>
            <label
              tabIndex={0}
              className='flex items-center gap-2 text-white cursor-pointer'
              onClick={toggleDropdown}
            >
              <FaUser size={20} className='text-white' />
              <span>Chinh</span>
              <FaCaretDown size={16} className='text-white' />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 hidden mt-4'
            >
              <li>
                <a href='/profile' className='flex items-center gap-2'>
                  <FaUser size={16} />
                  プロフィール
                </a>
              </li>
              <li>
                <a href='/settings' className='flex items-center gap-2'>
                  <FaCog size={16} />
                  設定
                </a>
              </li>
              <li>
                <a href='/logout' className='flex items-center gap-2'>
                  <FaSignOutAlt size={16} />
                  ログアウト
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
