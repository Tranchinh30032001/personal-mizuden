import { cn } from '@/utils/cn'

const Title = ({ children, className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div className='w-1.5 h-6 bg-blue-secondary'></div>
      <div className='flex items-center gap-1'>
        <div className='second_title'> {children}</div>
      </div>
    </div>
  )
}

export default Title
