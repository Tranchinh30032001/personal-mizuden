import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { cn } from '@/utils/cn'
import FieldWrapper from '@/components/containers/FieldWrapper'

const Radio = ({ label, name, options, direction = 'col', className, children, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} name={name} direction={direction}>
      <div className={cn('flex items-center gap-8', className)}>
        {options.map((option) => (
          <label key={option.value} className={cn('flex items-center gap-2 min-w-fit')}>
            <input
              type='radio'
              id={`${name}-${option.value}`}
              value={option.value}
              {...register(name)}
              className={cn('radio radio-primary radio-sm', {
                'border-red-500': errors[name]
              })}
              {...props}
            />
            <span className='formLabel font-japan whitespace-normal break-words max-w-[140px]'>
              {option.label}
            </span>
          </label>
        ))}
        <div className='w-fit'>{children}</div>
      </div>
      {errors[name] && <p className='errorMessage'>{errors[name].message}</p>}
    </FieldWrapper>
  )
}

export default Radio

Radio.propTypes = {
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
