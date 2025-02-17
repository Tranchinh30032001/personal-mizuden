import PropTypes from 'prop-types'
import TimePicker from './TimePicker'
import FieldWrapper from '@/components/containers/FieldWrapper'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
/**
 * TimeRangePicker Component
 * Renders a pair of TimePickers for selecting a time range (from/to)
 * Wraps the time pickers in a field wrapper with a label
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the entire time range field
 * @param {string} props.nameFrom - Name attribute for the 'from' time picker
 * @param {string} props.nameTo - Name attribute for the 'to' time picker
 * @param {string} [props.direction='col'] - Layout direction ('row' or 'col')
 */
const TimeRangePicker = ({ label, nameFrom, nameTo, direction = 'col' }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} direction={direction}>
      {/* Container for the time picker pair with spacing */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          {/* 'From' time picker */}
          <TimePicker name={nameFrom} />
          {/* Range separator */}
          <span className='scale-150'> ~ </span>
          {/* 'To' time picker */}
          <TimePicker name={nameTo} />
        </div>
        {/* Error message container */}
        {errors[nameTo] && (
          <div className='text-red-500 text-sm'>{errors[nameTo].message}</div>
        )}
      </div>
    </FieldWrapper>
  )
}

TimeRangePicker.propTypes = {
  label: PropTypes.string,
  nameFrom: PropTypes.string.isRequired,
  nameTo: PropTypes.string.isRequired,
  direction: PropTypes.string
}

export default memo(TimeRangePicker)
