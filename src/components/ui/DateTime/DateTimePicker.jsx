import FieldWrapper from '@/components/containers/FieldWrapper'
import TimePicker from './TimePicker'
import { useFormContext } from 'react-hook-form'
import { formatDateToTimestamp } from '@/utils/dateUntils/formatDateToTimestamp'
import { memo, useCallback } from 'react'
import { parseDateTime } from '@/utils/dateUntils/common'
import DatePickerBase from './DatePickerBase'

const DateTimePicker = ({ label, direction, name }) => {
  const { setValue, watch } = useFormContext()
  const value = watch(name) || ''
  const { date, time } = parseDateTime(value)

  const handleDateChange = useCallback(
    (newDate) => {
      // Format and slice the date to get YYYYMMDD format
      const dateSlice = formatDateToTimestamp(newDate).slice(0, 8)
      // If no valid date, exit early
      if (!dateSlice) return
      // If no time value exists, set default time to 000000
      if (!time) {
        setValue(name, `${dateSlice}000000`, {
          shouldValidate: true
        })
        return
      }
      // If time exists, check its length:
      // - If time is 6 digits (HHMMSS), combine with date
      // - Otherwise, just use the date portion
      setValue(name, time?.length === 6 ? `${dateSlice}${time}` : dateSlice, {
        shouldValidate: true
      })
    },
    [time, name, setValue]
  )

  /**
   * Example values:
   * - date: "20240315" (YYYYMMDD)
   * - newTime: "143000" (HHMMSS)
   * - Combined: "20240315143000" (YYYYMMDDHHMMSS)
   */
  const handleTimeChange = useCallback(
    (e) => {
      const newTime = e.target.value
      // Skip update if time is empty
      if (!newTime) return

      // If date exists (8 chars), combine date + time
      // Otherwise just use the time value
      setValue(name, date?.length === 8 ? `${date}${newTime}` : newTime, { shouldValidate: true })
    },
    [date, name, setValue]
  )

  return (
    <FieldWrapper label={label} direction={direction}>
      <div className='flex items-center gap-2'>
        <DatePickerBase
          name={`${name}_date`}
          onChange={handleDateChange}
          value={date}
          placeholder='----/--/--'
        />
        <TimePicker
          name={`${name}_time`}
          onChange={handleTimeChange}
          value={time}
          placeholder='--:--'
        />
      </div>
    </FieldWrapper>
  )
}

export default memo(DateTimePicker)
