import FieldWrapper from '@/components/containers/FieldWrapper'
import DateHourMinutePicker from './DateHourMinutePicker'
import { useFormContext } from 'react-hook-form'
/**
 * DateHourMinuteRangePicker Component
 * Renders a pair of DateHourMinutePickers for selecting a date and time range
 * Combines date selection with hour-minute selection in a range format
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the entire range field
 * @param {string} props.nameFrom - Name attribute for the 'from' date and time fields
 * @param {string} props.nameTo - Name attribute for the 'to' date and time fields
 * @param {string} [props.direction='col'] - Layout direction ('row' or 'col')
 */
const DateHourMinuteRangePicker = ({ label, nameFrom, nameTo, direction = 'col' }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} direction={direction}>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          {/* 'From' date and time picker */}
          <DateHourMinutePicker name={nameFrom} />
          {/* Range separator */}
          <span className='scale-150'> ~ </span>
          {/* 'To' date and time picker */}
          <DateHourMinutePicker name={nameTo} />
        </div>
        {/* Error message container */}
        {errors[nameTo] && (
          <div className='text-red-500 text-sm'>{errors[nameTo].message}</div>
        )}
      </div>
    </FieldWrapper>
  )
}

export default DateHourMinuteRangePicker
