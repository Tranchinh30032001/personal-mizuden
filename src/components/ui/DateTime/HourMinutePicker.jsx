import FieldWrapper from '@/components/containers/FieldWrapper'
import Select from '../Select/Select'
import { memo, useCallback, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { generateHourOptions, generateMinuteOptions } from '@/utils/dateUntils/common'

/**
 * HourMinutePicker - A form component for selecting hours and minutes
 * @param {string} label - Label text for the field
 * @param {string} name - Base name for the form field (will be used to create hour/minute field names)
 * @param {string} direction - Layout direction ('col' or 'row') for the field wrapper
 */
const HourMinutePicker = ({ label, name, direction = 'col', className }) => {
  const { setValue, watch } = useFormContext()

  // Generate and memoize hour/minute options to prevent recreation on each render
  const hourOptions = useMemo(generateHourOptions, [])
  const minuteOptions = useMemo(generateMinuteOptions, [])

  // Watch individual hour and minute fields, defaulting to empty string if not set
  const hourValue = watch(`${name}_hour`) || ''
  const minuteValue = watch(`${name}_minute`) || ''

  /**
   * Handles hour selection change
   * Updates both the individual hour field and the combined time value
   */
  const handleHourChange = useCallback(
    (e) => {
      const newHour = e.target.value
      setValue(`${name}_hour`, newHour)
      // Update combined value
      setValue(name, `${newHour}${minuteValue || '00'}`, { shouldValidate: true })
    },
    [name, setValue, minuteValue]
  )

  /**
   * Handles minute selection change
   * Updates both the individual minute field and the combined time value
   */
  const handleMinuteChange = useCallback(
    (e) => {
      const newMinute = e.target.value
      setValue(`${name}_minute`, newMinute)
      // Update combined value
      setValue(name, `${hourValue || '00'}${newMinute}`, { shouldValidate: true })
    },
    [name, setValue, hourValue]
  )

  return (
    <FieldWrapper label={label} direction={direction}>
      <div className='flex items-center gap-2'>
        {/* Hour Select */}
        <Select
          name={`${name}_hour`}
          options={hourOptions}
          onChange={handleHourChange}
          value={hourValue}
          placeholder='--'
          className={className}
          isMarginLeft={false}
        />
        {/* Colon Separator */}
        <span className=''>:</span>
        {/* Minute Select */}
        <Select
          name={`${name}_minute`}
          options={minuteOptions}
          onChange={handleMinuteChange}
          value={minuteValue}
          placeholder='--'
          className={className}
          isMarginLeft={false}
        />
      </div>
    </FieldWrapper>
  )
}

export default memo(HourMinutePicker)
