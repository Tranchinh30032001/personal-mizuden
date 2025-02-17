import Portal from '@features/pages/deviceManager/pc/portal'
import usePageLoad from '@/hooks/usePageLoad'

const PortalPage = () => {
  // Trigger the `onLoaded` callback when the page has finished loading.
  usePageLoad(<PortalPage />)

  return <Portal />
}

export default PortalPage
