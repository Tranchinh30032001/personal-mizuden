import RegisterWork from '@/features/pages/deviceManager/pc/work/register'
import usePageLoad from '@/hooks/usePageLoad'

const RegisterWorkPage = () => {
  // Trigger the `onLoaded` callback when the page has finished loading.
  usePageLoad(<RegisterWorkPage />)
  return <RegisterWork />
}

export default RegisterWorkPage
