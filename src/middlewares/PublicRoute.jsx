import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const token = localStorage.getItem('token') // check token

  // if token not exists, redirect to /login when redirecting to protected pages
  if (token) {
    return <Navigate to='/portal' replace />
  }

  return <Outlet />
}

export default PublicRoute
