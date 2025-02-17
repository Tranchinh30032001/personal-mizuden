import PropTypes from 'prop-types'
import Select from '../Select/Select'
import { cn } from '@/utils/cn'
import { memo, useMemo } from 'react'
import { generateQuarterHourOptions } from '@/utils/dateUntils/common'

/**
 * TimePicker Component
 * Renders a select input for choosing time in 15-minute intervals over a 24-hour period
 * Uses the Select component internally with pre-generated time options
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the select input
 * @param {string} props.name - Name attribute for the form field
 * @param {string} [props.direction='col'] - Layout direction ('row' or 'col')
 * @param {string} [props.className] - Additional CSS classes
 */
const TimePicker = ({ label, name, direction = 'col', className, ...props }) => {
  // Memoize time options to prevent unnecessary recalculations
  const options = useMemo(generateQuarterHourOptions, [])

  return (
    <Select
      label={label}
      direction={direction}
      name={name}
      options={options}
      className={cn(className)}
      {...props}
    />
  )
}

// PropTypes for type checking and documentation
TimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  direction: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
}

// Memoize the component to prevent unnecessary re-renders
export default memo(TimePicker)
