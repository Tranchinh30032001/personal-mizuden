import FieldWrapper from '@/components/containers/FieldWrapper'
import { useFormContext, useWatch } from 'react-hook-form'
import { memo, useCallback, useMemo, useEffect } from 'react'
import { formatDateToTimestamp } from '@/utils/dateUntils/formatDateToTimestamp'
import {
  generateHourOptions,
  generateMinuteOptions,
  parseDateTime
} from '@/utils/dateUntils/common'
import DatePickerBase from './DatePickerBase'
import Select from '../Select/Select'

/**
 * DateHourMinutePicker Component
 * Handles datetime value in format: YYYYMMDDHHMMSS
 */
const DateHourMinutePicker = ({ label, direction, name }) => {
  const { control, setValue, watch } = useFormContext()

  // Watch the main field for initial value
  const mainValue = watch(name)

  // Watch individual fields
  const [dateValue, hourValue, minuteValue] = useWatch({
    control,
    name: [`${name}_date`, `${name}_hour`, `${name}_minute`],
    defaultValue: ['', '', '']
  })

  // Generate and memoize hour/minute options to prevent recreation on each render
  const hourOptions = useMemo(generateHourOptions, [])
  const minuteOptions = useMemo(generateMinuteOptions, [])

  // Initialize fields when mainValue changes
  useEffect(() => {
    if (mainValue && (!dateValue || !hourValue || !minuteValue)) {
      const { date, time } = parseDateTime(mainValue)
      if (date) {
        setValue(`${name}_date`, date)
        // Set default time values only if date is selected and time values are empty
        if (!hourValue) setValue(`${name}_hour`, time ? time.slice(0, 2) : '00')
        if (!minuteValue) setValue(`${name}_minute`, time ? time.slice(2, 4) : '00')
      }
    }
  }, [mainValue, dateValue, hourValue, minuteValue, name, setValue])

  /**
   * Updates the combined datetime value
   */
  const updateCombinedValue = useCallback(
    (date, hour, minute) => {
      if (!date) return

      const hourStr = hour || '00'
      const minuteStr = minute || '00'
      setValue(name, `${date}${hourStr}${minuteStr}`, { shouldValidate: true })
    },
    [name, setValue]
  )

  /**
   * Handles date selection
   */
  const handleDateChange = useCallback(
    (newDate) => {
      if (!newDate) {
        setValue(`${name}_date`, '')
        setValue(name, '')
        return
      }

      const formattedDate = formatDateToTimestamp(newDate).slice(0, 8)
      setValue(`${name}_date`, formattedDate)

      // When date is selected, use default time if not set
      const currentHour = hourValue || '00'
      const currentMinute = minuteValue || '00'

      if (!hourValue) setValue(`${name}_hour`, '00')
      if (!minuteValue) setValue(`${name}_minute`, '00')

      updateCombinedValue(formattedDate, currentHour, currentMinute)
    },
    [name, setValue, updateCombinedValue, hourValue, minuteValue]
  )

  /**
   * Handles hour selection
   */
  const handleHourChange = useCallback(
    (e) => {
      const newHour = e.target.value
      setValue(`${name}_hour`, newHour)
      if (dateValue) {
        updateCombinedValue(dateValue, newHour, minuteValue)
      }
    },
    [name, setValue, updateCombinedValue, dateValue, minuteValue]
  )

  /**
   * Handles minute selection
   */
  const handleMinuteChange = useCallback(
    (e) => {
      const newMinute = e.target.value
      setValue(`${name}_minute`, newMinute)
      if (dateValue) {
        updateCombinedValue(dateValue, hourValue, newMinute)
      }
    },
    [name, setValue, updateCombinedValue, dateValue, hourValue]
  )

  return (
    <FieldWrapper label={label} direction={direction}>
      <div className='flex items-center gap-2'>
        <DatePickerBase
          name={`${name}_date`}
          value={dateValue}
          onChange={handleDateChange}
          placeholder='----/--/--'
        />
        <Select
          name={`${name}_hour`}
          value={hourValue || ''}
          onChange={handleHourChange}
          options={hourOptions}
          placeholder='--'
        />
        <span>:</span>
        <Select
          name={`${name}_minute`}
          value={minuteValue || ''}
          onChange={handleMinuteChange}
          options={minuteOptions}
          placeholder='--'
        />
      </div>
    </FieldWrapper>
  )
}

export default memo(DateHourMinutePicker)
