import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { cn } from '@/utils/cn'
import FieldWrapper from '@/components/containers/FieldWrapper'

const Textarea = ({ label, name, direction = 'col', className, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} name={name} direction={direction}>
      <textarea
        id={name}
        {...register(name)}
        className={cn('textarea textarea-bordered w-full !outline-none', className, {
          'border-red-500': errors[name]
        })}
        {...props}
      />
      {errors[name] && <p className='errorMessage'>{errors[name].message}</p>}
    </FieldWrapper>
  )
}

export default Textarea

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['row', 'col']),
  className: PropTypes.string,
  props: PropTypes.object
}
