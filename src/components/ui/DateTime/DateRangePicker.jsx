import FieldWrapper from '@/components/containers/FieldWrapper'
import Button from '../Button/Button'
import { useFormContext } from 'react-hook-form'
import { memo } from 'react'
import DatePickerBase from './DatePickerBase'
/**
 * DateRangePicker Component
 * Renders a pair of DatePickers for selecting a date range with optional clear button
 * Wraps the pickers in a field wrapper with a label
 * Integrates with react-hook-form for form state management
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the entire date range field
 * @param {string} props.direction - Layout direction ('row' or 'col')
 * @param {string} props.nameFrom - Name attribute for the 'from' date picker
 * @param {string} props.nameTo - Name attribute for the 'to' date picker
 * @param {boolean} props.isButtonClear - If true, hides the clear button
 */
const DateRangePicker = ({ label, direction, nameFrom, nameTo, isButtonClear, ...props }) => {
  const { setValue } = useFormContext()

  /**
   * Clears the selected date range
   * Sets both date picker values to null using react-hook-form's setValue
   */
  const handleClear = () => {
    setValue(nameFrom, null)
    setValue(nameTo, null)
  }

  return (
    <FieldWrapper label={label} direction={direction}>
      {/* Container for the date picker pair and clear button */}
      <div className='flex items-center gap-2 w-fit'>
        {/* 'From' date picker */}
        <DatePickerBase name={nameFrom} {...props} />
        {/* Range separator */}
        <span className='scale-150'>~</span>
        {/* 'To' date picker */}
        <DatePickerBase name={nameTo} {...props} />
        {/* Optional clear button - shown when isButtonClear is false */}
        {isButtonClear && <Button label='クリア' className='w-20 !btn-sm' onClick={handleClear} />}
      </div>
    </FieldWrapper>
  )
}

export default memo(DateRangePicker)
