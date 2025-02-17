import { cn } from '@/utils/cn'
import PropTypes from 'prop-types'
import Title from '../ui/Title/Title'

const DetailPanel = ({ title, data, className, children }) => {
  return (
    <div className={cn('rounded-md', className)}>
      <div className='px-4 py-3 border-b border-gray-200'>
        <Title name={title}>{children}</Title>
      </div>

      <div
        className={cn(
          ' border-[var(--color-border-primary)] border-y divide-y divide-[var(--color-border-primary)] max-h-[300px] overflow-y-auto'
        )}
      >
        {data.map((row, index) => (
          <div key={index} className='grid grid-cols-3 px-4 py-1 gap-4'>
            <div className='text-gray-600 font-medium'>{row.label}</div>
            <div className='col-span-2'>
              {Array.isArray(row.value) ? (
                <ul className='list-none '>
                  {row.value.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                row.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

DetailPanel.propTypes = {
  /* Panel title text */
  title: PropTypes.string.isRequired,
  /* Array of label/value pairs to display */
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
      ]).isRequired
    })
  ).isRequired,
  /* Optional action buttons to display in title */
  children: PropTypes.node,
  /* Additional className to apply to wrapper */
  className: PropTypes.string,
  /* Whether the panel should be expandable for many rows */
  expandable: PropTypes.bool
}

export default DetailPanel
