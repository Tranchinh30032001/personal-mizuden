import CalendarIcon from '@/assets/icons/icon-calendar.svg'
import DatePickerLib from 'react-datepicker'
import ja from 'date-fns/locale/ja'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'
import { cn } from '@/utils/cn'
import { formatDateToTimestamp } from '@/utils/dateUntils/formatDateToTimestamp'
import { parseStringToDate } from '@/utils/dateUntils/parseStringToDate'
import { generateYears } from '@/utils/dateUntils/common'
import { memo } from 'react'
import { formatDateToSlashFormat } from '@/utils/dateUntils/formatDateToSlashFormat'

// Generate year options from 1950 to 10 years from now
const years = generateYears(1950, new Date().getFullYear() + 10)
// Generate month options (0-11)
const months = Array.from(Array(12).keys())

/**
 * DatePickerBase Component
 * Base component for date selection using react-datepicker
 * Provides Japanese localization and custom styling
 * Integrates with react-hook-form for form state management
 *
 * @param {Object} props
 * @param {string} props.name - Field name for form integration
 * @param {boolean} props.disabled - Whether the date picker is disabled
 * @param {string} props.placeholder - Placeholder text when no date is selected
 */
const DatePickerBase = ({ name, disabled, placeholder, className, ...props }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <div className='flex flex-col relative w-full border-[1px] border-black rounded-lg'>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => {
          const date = parseStringToDate(value)
          return (
            <DatePickerLib
              selected={date}
              onChange={(date) => onChange(formatDateToTimestamp(date))}
              dateFormat='yyyy/MM/dd' //Slash date format
              locale={ja} // Japanese localization
              closeOnScroll={true}
              renderCustomHeader={CustomHeaderDatePicker}
              disabled={disabled}
              placeholderText={placeholder}
              customInput={
                <CustomInput
                  hasError={!!errors[name]}
                  placeholder={placeholder}
                  className={className}
                />
              }
              {...props}
            />
          )
        }}
      />
      {/* Error message display */}
      {errors[name] && (
        <span className='errorMessage absolute top-[100%]'>{errors[name].message}</span>
      )}
    </div>
  )
}

/**
 * CustomInput Component
 * Custom input field for the date picker
 * Displays formatted date and calendar icon
 *
 * @param {Object} props
 * @param {string} props.value - Selected date value
 * @param {Function} props.onClick - Click handler for the input
 * @param {boolean} props.hasError - Whether there's a validation error
 * @param {boolean} props.disabled - Whether the input is disabled
 * @param {string} props.placeholder - Placeholder text when no date is selected
 */
const CustomInput = ({ value, onClick, hasError, disabled, placeholder = '', className }, ref) => {
  const formattedValue = value ? formatDateToSlashFormat(value) : placeholder
  return (
    <div
      className={cn('relative', {
        'opacity-50 cursor-not-allowed': disabled
      })}
      onClick={(e) => {
        if (!disabled) {
          e.currentTarget.querySelector('input').focus()
          onClick(e)
        }
      }}
      ref={ref}
    >
      <input
        type='text'
        className={cn('inputCustom text-gray-primary border-none', className, {
          'border-red-500': hasError,
          'cursor-not-allowed': disabled
        })}
        value={formattedValue}
        readOnly
        disabled={disabled}
      />
      {/* Calendar icon */}
      <div className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer'>
        <img src={CalendarIcon} alt='calendar icon' className={disabled ? 'opacity-50' : ''} />
      </div>
    </div>
  )
}

/**
 * CustomHeaderDatePicker Component
 * Custom header for the date picker calendar
 * Provides year and month selection dropdowns
 *
 * @param {Object} props - Props from react-datepicker
 * @param {Date} props.date - Currently selected date
 * @param {Function} props.changeYear - Year change handler
 * @param {Function} props.changeMonth - Month change handler
 * @param {Function} props.decreaseMonth - Previous month handler
 * @param {Function} props.increaseMonth - Next month handler
 * @param {boolean} props.prevMonthButtonDisabled - Whether previous month button is disabled
 * @param {boolean} props.nextMonthButtonDisabled - Whether next month button is disabled
 */
function CustomHeaderDatePicker({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}) {
  return (
    <div>
      {/* Previous month button */}
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {'＜　　'}
      </button>
      {/* Year selector */}
      <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)}>
        {years.map((option) => (
          <option key={option} value={option}>
            {option}年
          </option>
        ))}
      </select>
      {/* Month selector */}
      <select value={date.getMonth()} onChange={({ target: { value } }) => changeMonth(value)}>
        {months.map((option) => (
          <option key={option} value={option}>
            {option + 1}月
          </option>
        ))}
      </select>
      {/* Next month button */}
      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {'　　＞'}
      </button>
    </div>
  )
}

export default memo(DatePickerBase)
