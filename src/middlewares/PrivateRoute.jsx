import { Navigate } from 'react-router-dom'
import PersistedOutlet from '@features/common/PersistedOutlet'
import MainLayout from '@/layouts/MainLayout'

const PrivateRoute = () => {
  const token = localStorage.getItem('token') // check token

  // if token not exists, redirect to /login when redirecting to protected pages
  if (!token) {
    return <Navigate to='/login' replace />
  }

  return (
    <MainLayout>
      <PersistedOutlet />
    </MainLayout>
  )
}

export default PrivateRoute
