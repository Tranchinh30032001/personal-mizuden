import { cn } from '@/utils/cn'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const QuickAccess = ({ icon, text, href, className, ...props }) => {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-1 px-2 py-4 w-48 border-[1px] border-gray-border-primary rounded-md bg-[#EEEEEE] text-[#282828] hover:border-blue-primary hover:text-blue-primary',
        className
      )}
      {...props}
    >
      {icon && icon}
      <span className='truncate font-medium text-sm'>{text}</span>
    </Link>
  )
}

QuickAccess.propTypes = {
  // icon: A React node representing the icon to be displayed
  icon: PropTypes.node,
  // text: A required string representing the text to be displayed
  text: PropTypes.string.isRequired,
  // href: A required string representing the link URL
  href: PropTypes.string.isRequired,
  // className: An optional string for additional CSS classes
  className: PropTypes.string
}

export default QuickAccess
