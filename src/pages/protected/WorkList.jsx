import Work from '@/features/pages/deviceManager/pc/work'
import usePageLoad from '@/hooks/usePageLoad'

const WorkListPage = () => {
  // Trigger the `onLoaded` callback when the page has finished loading.
  usePageLoad(<WorkListPage />)
  return <Work />
}

export default WorkListPage
