import { cn } from '@/utils/cn'

const LayoutContainer = ({ children, className }) => {
  return <div className={cn('container', className)}>{children}</div>
}

export default LayoutContainer
