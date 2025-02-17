import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Login from './pages/public/Login'
import { PrivateRoute, PermissionRoute, PublicRoute } from './middlewares'
import { RoutesApp } from './configs/routes'

const NotFoundPage = lazy(() => import('./pages/public/NotFound'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
      </Route>

      {/* protected route */}
      <Route element={<PrivateRoute />}>
        {RoutesApp.Protected.map(({ path, element, allowedRoles }, index) => (
          <Route
            key={index}
            path={path}
            element={<PermissionRoute allowedRoles={allowedRoles} />}
          >
            <Route index element={element} />
          </Route>
        ))}
        {/* 404 NotFound Page */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
