import { Navigate } from 'react-router-dom'
import PersistedOutlet from '../features/common/PersistedOutlet'

const PermissionRoute = ({ allowedRoles }) => {
  // const userType = useUserStore((state) => state.userType)
  const userType = 'DEVICE_MANAGER'

  if (!userType || !allowedRoles.includes(userType)) {
    return <Navigate to='/unauthorized' replace />
  }

  return <PersistedOutlet />
}

export default PermissionRoute
