import FieldWrapper from '@/components/containers/FieldWrapper'
import DatePickerBase from './DatePickerBase'
import { memo } from 'react'
/**
 * DatePicker Component
 * A wrapper component that combines DatePickerBase with a FieldWrapper
 * Provides a labeled date picker field with consistent styling
 *
 * @param {Object} props
 * @param {string} props.label - Label text for the field
 * @param {string} props.name - Field name for form integration
 * @param {string} [props.direction] - Layout direction for label and field
 * @param {string} [props.placeholder] - Placeholder text when no date is selected
 */
const DatePicker = ({ label, name, direction, placeholder, ...props }) => {
  return (
    <FieldWrapper label={label} direction={direction} className='w-fit'>
      {/* Render the base date picker with form integration */}
      <DatePickerBase name={name} placeholder={placeholder} {...props} />
    </FieldWrapper>
  )
}

export default memo(DatePicker)
