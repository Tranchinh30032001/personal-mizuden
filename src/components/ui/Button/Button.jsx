import PropTypes from 'prop-types'
import { cn } from '@/utils/cn'

const Button = ({ className, label, prefixIcon, suffixIcon, children, ...props }) => {
  return (
    <button type='button' {...props} className={cn('operate_button', className)}>
      {prefixIcon && <span className='text-sm'>{prefixIcon}</span>}
      {label && <p className='text-sm'>{label}</p>}
      {children}
      {suffixIcon && <span className='text-sm'>{suffixIcon}</span>}
    </button>
  )
}

export default Button

Button.propTypes = {
  /* The label text for the input */
  label: PropTypes.string,
  /* Additional custom class names */
  className: PropTypes.string,
  /* Icon or element displayed before the label. */
  prefixIcon: PropTypes.node,
  /* Icon or element displayed after the label.  */
  suffixIcon: PropTypes.node,
  /* Additional children elements inside the button. */
  children: PropTypes.node
}
