import { lazy, Suspense } from 'react'
import { useBoundStore } from '../../stores'
import MODAL_TYPE from '@/constants/modalType'

// Dynamic import for code splitting
const ScheduleChangeModal = lazy(() => import('@/components/modal/ScheduleChangeModal'))

const ModalSwitcher = () => {
  const isOpen = useBoundStore((state) => state.isOpen)
  const type = useBoundStore((state) => state.type)
  const props = useBoundStore((state) => state.props)
  const onAction = useBoundStore((state) => state.onAction)
  const onClose = useBoundStore((state) => state.onClose)
  const closeModal = useBoundStore((state) => state.closeModal)

  // If modal is not open or type is not defined, return null
  if (!isOpen || !type) return null

  // Switch case for modal type
  const ModalComponent = {
    [MODAL_TYPE.SCHEDULE_CHANGE]: ScheduleChangeModal
  }[type]

  // If ModalComponent is not defined, return null
  if (!ModalComponent) return null

  const handleAction = () => {
    if (typeof onAction === 'function') {
      onAction()
    }
    closeModal()
  }

  const handleCloseModal = () => {
    if (typeof onClose === 'function') {
      onClose()
    }
    closeModal()
  }

  return (
    <Suspense
      fallback={
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='modal-box'>
            <div className='flex items-center justify-center'>
              <span className='loading loading-spinner loading-lg'></span>
            </div>
          </div>
        </div>
      }
    >
      <ModalComponent {...props} onAction={handleAction} onClose={handleCloseModal} />
    </Suspense>
  )
}

export default ModalSwitcher
