const LoadingOverlay = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='text-white text-xl'>Loading...</div>
    </div>
  )
}

export default LoadingOverlay
