import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { cn } from '@/utils/cn'
import FieldWrapper from '@/components/containers/FieldWrapper'

const Input = ({ label, name, direction = 'col', className, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} name={name} direction={direction}>
      <input
        id={name}
        {...register(name)}
        className={cn('inputCustom', className, {
          'border-red-500': errors[name]
        })}
        {...props}
      />
      {errors[name] && <p className='errorMessage'>{errors[name].message}</p>}
    </FieldWrapper>
  )
}

export default Input

Input.propTypes = {
  /* The label text for the input */
  label: PropTypes.string,
  /* The name of the input, required for react-hook-form integration */
  name: PropTypes.string,
  /* The direction of the label/input layout (row or column) */
  direction: PropTypes.oneOf(['row', 'col']),
  /* Additional custom class names */
  className: PropTypes.string,
  /* Input element attributes like type, value, onChange */
  props: PropTypes.object
}
