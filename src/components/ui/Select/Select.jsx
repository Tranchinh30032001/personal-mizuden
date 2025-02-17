import { useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import { cn } from '@/utils/cn'
import FieldWrapper from '@/components/containers/FieldWrapper'

/**
 * Select Component
 * A form select component with placeholder support
 *
 * @param {Object} props
 * @param {string} [props.label] - Label text for the field
 * @param {string} props.name - Field name for form integration
 * @param {string} [props.direction='col'] - Layout direction
 * @param {Array} props.options - Array of option objects
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.className] - Additional CSS classes
 */
const Select = ({
  label,
  name,
  direction = 'col',
  options,
  className,
  placeholder = '', // Default placeholder
  isMarginLeft,
  ...props
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} name={name} direction={direction} isMarginLeft={isMarginLeft}>
      <select {...register(name)} className={cn('selectCustom', className)} {...props}>
        {/* Placeholder option */}
        {placeholder && (
          <option value='' disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <p className='errorMessage'>{errors[name].message}</p>}
    </FieldWrapper>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['row', 'col']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
}

export default Select
