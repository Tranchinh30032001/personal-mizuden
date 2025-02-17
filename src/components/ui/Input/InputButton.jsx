import FieldWrapper from '@/components/containers/FieldWrapper'
import Button from '../Button/Button'
import { cn } from '@/utils/cn'
import { useFormContext } from 'react-hook-form'
import { useBoundStore } from '@/stores'

const InputButton = ({
  label,
  labelButton = '参 照',
  name,
  direction = 'col',
  className,
  typeModal,
  isButton = true,
  ...props
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const openModal = useBoundStore((state) => state.openModal)

  const handleClick = () => {
    openModal({
      type: typeModal
    })
  }

  return (
    <FieldWrapper label={label} name={name} direction={direction}>
      <div className='flex items-center gap-[2px]'>
        <input
          id={name}
          {...register(name)}
          className={cn('inputCustom', className, {
            'border-red-500': errors[name]
          })}
          {...props}
        />
        <div className='w-20'>
          {isButton && <Button className='!btn-sm' label={labelButton} onClick={handleClick} />}
        </div>
      </div>
      {errors[name] && <p className='errorMessage'>{errors[name].message}</p>}
    </FieldWrapper>
  )
}

export default InputButton
