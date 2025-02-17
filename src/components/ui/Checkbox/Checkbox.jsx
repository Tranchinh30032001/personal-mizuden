import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import FieldWrapper from '@/components/containers/FieldWrapper'
import { cn } from '@/utils/cn'

const Checkbox = ({ label, name, options, direction = 'row', className, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} name={name} direction={direction}>
      <div className={cn('flex flex-wrap gap-8', className)}>
        {options.map((option) => (
          <label key={option.value} className={cn('flex items-center gap-2 min-w-fit')}>
            <input
              type='checkbox'
              id={`${name}-${option.value}`}
              value={option.value}
              {...register(name)}
              className={cn('checkbox checkbox-primary rounded-none size-5 md:size-6', {
                'border-red-500': errors[name]
              })}
              {...props}
            />
            <span className='formLabel font-japan whitespace-normal break-words max-w-[200px]'>
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors[name] && <p className='errorMessage'>{errors[name].message}</p>}
    </FieldWrapper>
  )
}

export default Checkbox

Checkbox.propTypes = {
  label: PropTypes.string,

  name: PropTypes.string,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,

  direction: PropTypes.oneOf(['row', 'col']),

  className: PropTypes.string,

  props: PropTypes.object
}
