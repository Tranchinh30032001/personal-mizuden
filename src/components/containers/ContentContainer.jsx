import { cn } from '@/utils/cn'

/**
 * ContentContainer component
 *
 * This component serves as a flexible container for content, providing
 * a white background, automatic overflow handling, and padding.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className] - Additional class names to apply to the container.
 */
const ContentContainer = ({ children, className }) => {
  return <div className={cn('flex-1 bg-white overflow-auto p-4', className)}>{children}</div>
}

export default ContentContainer
