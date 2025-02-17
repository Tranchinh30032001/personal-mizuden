import { cn } from '@/utils/cn'

/**
 * FieldWrapper component that wraps form fields with an optional label.
 *
 * @param {string} props.label - The label text for the form field.
 * @param {string} props.name - The name attribute for the form field.
 * @param {string} [props.direction='col'] - The direction of the layout, either 'col' for column or 'row' for row.
 * @param {React.ReactNode} props.children - The form field elements to be wrapped.
 */
const FieldWrapper = ({
  label,
  name,
  direction = 'col',
  className,
  isMarginLeft = true,
  children
}) => {
  return (
    <div
      className={cn(
        'flex w-full',
        direction === 'row' ? 'items-center gap-2' : 'flex-col',
        className
      )}
    >
      {label && (
        <label
          htmlFor={name}
          className={cn('formLabel', {
            'w-36': direction === 'row'
          })}
        >
          {label}
        </label>
      )}
      <div className={cn({ 'ml-4': direction === 'col' && isMarginLeft })}>{children}</div>
    </div>
  )
}

export default FieldWrapper
