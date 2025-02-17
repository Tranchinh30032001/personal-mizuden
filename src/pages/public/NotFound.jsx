import usePageLoad from '@/hooks/usePageLoad'

const NotFoundPage = () => {

  // Trigger the `onLoaded` callback when the page has finished loading.
  usePageLoad( <NotFoundPage />)

  return (
    <div className='hero h-4/5 bg-base-200'>
      <div className='hero-content text-accent text-center'>
        <div className='max-w-md'>
          {/* <FaceFrownIcon className='h-48 w-48 inline-block' /> */}
          <h1 className='text-5xl  font-bold'>404 - Not Found</h1>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
