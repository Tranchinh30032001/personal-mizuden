import Button from '../ui/Button/Button'

/**
 * ModalFooterButtons component renders a footer with action and close buttons.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onAction - The callback function to be called when the action button is clicked.
 * @param {Function} props.onClose - The callback function to be called when the close button is clicked.
 * @returns {JSX.Element} The rendered component.
 */
const ModalFooterButtons = ({ onAction, onClose }) => {
  return (
    <div>
      <hr className='border-t-1 border-[var(--color-border-primary)] w-full' />

      <div className='flex justify-center gap-4 mt-4'>
        <Button label='確定' onClick={onAction} className='short_button' />
        <Button label='キャンセル' className='cancelButton short_button' onClick={onClose} />
      </div>
    </div>
  )
}

export default ModalFooterButtons
