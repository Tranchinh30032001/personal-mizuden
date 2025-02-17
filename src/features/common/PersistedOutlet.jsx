/* eslint-disable no-unused-vars */
/* eslint-dgit misable no-unused-vars */
import { Suspense, useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LoadingOverlay from '@components/shared/LoadingOverlay'

const PersistedOutlet = () => {
  const location = useLocation()
  const [prevContent, setPrevContent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // when location changes, reset the loading state
    // setIsLoading(true)
  }, [location.pathname])

  return (
    <div className='relative flex-1 flex flex-col w-full'>
      {/* show previous content */}
      {prevContent && <div className='absolute inset-0'>{prevContent}</div>}

      {isLoading && <LoadingOverlay />}

      <Suspense fallback={null}>
        <Outlet
        // after the new content is loaded, set it as the previous content
        />
      </Suspense>
    </div>
  )
}

export default PersistedOutlet
