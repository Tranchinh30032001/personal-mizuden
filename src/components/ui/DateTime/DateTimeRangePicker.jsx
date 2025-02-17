import FieldWrapper from '@/components/containers/FieldWrapper'
import DateTimePicker from './DateTimePicker'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
/**
 * DateTimeRangePicker Component
 * Renders a pair of DateTimePickers for selecting a date-time range
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the entire date-time range field
 * @param {string} [props.direction='col'] - Layout direction ('row' or 'col')
 */
const DateTimeRangePicker = ({ label, nameFrom, nameTo, direction = 'col' }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} direction={direction}>
      {/* Container for the date-time picker pair with spacing */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          {/* 'From' date-time picker */}
          <DateTimePicker name={nameFrom} />
          {/* Range separator */}
          <span className='scale-150'> ~ </span>
          {/* 'To' date-time picker */}
          <DateTimePicker name={nameTo} />
        </div>
        {/* Error message container */}
        {errors[nameTo] && (
          <div className='text-red-500 text-sm'>{errors[nameTo].message}</div>
        )}
      </div>
    </FieldWrapper>
  )
}

export default memo(DateTimeRangePicker)
