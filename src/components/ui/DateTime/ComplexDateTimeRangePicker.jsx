import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { cn } from '@/utils/cn'
import FieldWrapper from '@/components/containers/FieldWrapper'
import Select from '../Select/Select'
import Button from '../Button/Button'
import DateTimeRangePicker from './DateTimeRangePicker'

/**
 * Assembly options for the select dropdown
 */
const ASSEMBLY_OPTIONS = [
  { value: '', label: '----' },
  { value: 'assembly', label: '組立' },
  { value: 'assembly1', label: '組立1' },
  { value: 'assembly2', label: '組立2' },
  { value: 'assembly3', label: '組立3' }
]

/**
 * ComplexDateTimeRangePicker Component
 * A complex form component that combines assembly selection with date/time range picking
 *
 * @param {Object} props
 * @param {string} props.label - Label for the field group
 * @param {string} props.direction - Layout direction
 * @param {string} props.name - Base name for form fields
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.isClearButton - Whether to show the clear button
 */
const ComplexDateTimeRangePicker = ({
  label,
  direction,
  name,
  className,
  isClearButton = false
}) => {
  const { setValue } = useFormContext()

  /**
   * Handles clearing all fields in the component
   */
  const handleClear = () => {
    const fields = ['assembly', 'startDate', 'startTime', 'endDate', 'endTime']
    fields.forEach((field) => setValue(`${name}.${field}`, ''))
  }

  return (
    <FieldWrapper label={label} name={name} direction={direction}>
      <div className={cn('flex items-center gap-x-2', className)}>
        {/* Assembly Selection */}
        <div className='min-w-40'>
          <Select name={`${name}.assembly`} options={ASSEMBLY_OPTIONS} placeholder='----' />
        </div>
        {/* Start DateTime Section */}
        <DateTimeRangePicker nameFrom={`${name}.startDate`} nameTo={`${name}.startTime`} />
        {/* Clear Button */}
        {!isClearButton && <Button label='クリア' className='w-20' onClick={handleClear} />}
      </div>
    </FieldWrapper>
  )
}

ComplexDateTimeRangePicker.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  direction: PropTypes.string,
  isClearButton: PropTypes.bool
}

export default ComplexDateTimeRangePicker
