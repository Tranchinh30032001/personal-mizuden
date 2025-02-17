import { lazy } from 'react'
import { ROLES } from '@/constants/global'

const PortalPage = lazy(() => import('@/pages/protected/Portal'))
const WorkListPage = lazy(() => import('@/pages/protected/WorkList'))
const RegisterWorkPage = lazy(() => import('@/pages/protected/RegisterWork'))
const CalendarPage = lazy(() => import('@/pages/protected/Calendar'))

export const ROUTES = {
  portal: '/portal',
  works: '/works',
  calendar: '/calendar',
  login: '/login'
}

export const RoutesApp = {
  Protected: [
    {
      path: ROUTES.portal,
      element: <PortalPage />,
      allowedRoles: [ROLES.DEVICE_MANAGER, ROLES.SALE] // only DEVICE_MANAGER and SALE can access this page
    },
    {
      path: '/work',
      element: <WorkListPage />,
      allowedRoles: [ROLES.DEVICE_MANAGER, ROLES.SALE] // only DEVICE_MANAGER and SALE can access this page
    },
    {
      path: '/work/register',
      element: <RegisterWorkPage />,
      allowedRoles: [ROLES.DEVICE_MANAGER, ROLES.SALE] // only DEVICE_MANAGER and SALE can access this page
    },
    {
      path: '/calendar',
      element: <CalendarPage />,
      allowedRoles: [ROLES.DEVICE_MANAGER] // only DEVICE_MANAGER can access this page
    }
  ],
  Public: {
    LOGIN: ROUTES.login
  }
}
