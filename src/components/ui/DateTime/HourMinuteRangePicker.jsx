import PropTypes from 'prop-types'
import HourMinutePicker from './HourMinutePicker'
import FieldWrapper from '@/components/containers/FieldWrapper'
import { useFormContext } from 'react-hook-form'

/**
 * HourMinuteRangePicker Component
 * Renders a pair of HourMinutePickers for selecting a time range in HH:mm format
 * Similar to TimeRangePicker but with different time format and granularity
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the entire time range field
 * @param {string} props.nameFrom - Name attribute for the 'from' time picker
 * @param {string} props.nameTo - Name attribute for the 'to' time picker
 * @param {string} [props.direction='col'] - Layout direction ('row' or 'col')
 */
const HourMinuteRangePicker = ({ label, nameFrom, nameTo, direction = 'col' }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <FieldWrapper label={label} direction={direction}>
      {/* Container for the time picker pair with spacing */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          {/* 'From' hour-minute picker */}
          <HourMinutePicker name={nameFrom} />
          {/* Range separator */}
          <span className='scale-150'> ~ </span>
          {/* 'To' hour-minute picker */}
          <HourMinutePicker name={nameTo} />
        </div>
        {/* Error message container */}
        {errors[nameTo] && (
          <div className='text-red-500 text-sm'>{errors[nameTo].message}</div>
        )}
      </div>
    </FieldWrapper>
  )
}

HourMinuteRangePicker.propTypes = {
  label: PropTypes.string,
  nameFrom: PropTypes.string.isRequired,
  nameTo: PropTypes.string.isRequired,
  direction: PropTypes.string
}

export default HourMinuteRangePicker
