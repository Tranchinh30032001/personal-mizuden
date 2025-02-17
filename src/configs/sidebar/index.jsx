import {
  FaDesktop,
  FaCloudDownloadAlt,
  FaHeadset,
  FaFileContract,
  FaDatabase
} from 'react-icons/fa'

export const sidebarsPortal = [
  { icon: <FaDesktop />, name: 'ポータル', path: '/portal', children: [] },
  {
    icon: <FaCloudDownloadAlt />,
    name: 'システムド',
    path: '/company',
    children: []
  },
  {
    icon: <FaHeadset />,
    name: 'サポー情報',
    path: '#',
    children: []
  },
  { icon: <FaFileContract />, name: '契約認', path: '#', children: [] },
  { icon: <FaDatabase />, name: '共有スジ', path: '#', children: [] }
]

export const sidebarsPortal2 = [
  { icon: <FaDesktop />, name: 'ポータル', path: '#', children: [] },
  {
    icon: <FaCloudDownloadAlt />,
    name: 'システムド',
    path: '#',
    children: []
  }
]
