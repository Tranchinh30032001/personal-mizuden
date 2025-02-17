import { useBoundStore } from '@/stores'
import { cn } from '@/utils/cn'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const ModalContainer = ({ isOpen, children, size, className }) => {
  const closeModal = useBoundStore((state) => state.closeModal)

  // Determine the modal size based on the provided size prop
  const sizeModal = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
    max: 'max-w-[90rem]'
  }[size || 'md']

  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/30' onClick={closeModal} />
      <div
        className={cn(
          `relative bg-white rounded-lg w-11/12 ${sizeModal} md:w-full z-50 p-4`,
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

ModalContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'max']),
  className: PropTypes.string
}

export default ModalContainer
