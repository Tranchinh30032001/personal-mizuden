import { FormProvider, useForm } from 'react-hook-form'
import Textarea from '../ui/Textarea/Textarea'
import Title from '../ui/Title/Title'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ModalFooterButtons from '../shared/ModalFooterButtons'
import ModalContainer from '../containers/ModalContainer'
import DateRangePicker from '../ui/DateTime/DateRangePicker'

export const schemaForm = z
  .object({
    dateFrom: z.coerce.date().refine((date) => !!date, {
      message: 'Ngày bắt đầu là bắt buộc'
    }),
    dateTo: z.coerce.date().refine((date) => !!date, {
      message: 'Ngày kết thúc là bắt buộc'
    }),
    notext: z.string().min(1, 'Trường này không được để trống')
  })
  .refine(({ dateFrom, dateTo }) => dateFrom && dateTo && dateFrom < dateTo, {
    message: 'Ngày bắt hơn ngày kết thúc',
    path: ['dateTo']
  })

export default function ScheduleChangeModal({ onClose }) {
  const form = useForm({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      dateFrom: '',
      dateTo: '',
      notext: ''
    }
  })

  const onSubmit = form.handleSubmit(() => {})

  return (
    <ModalContainer isOpen>
      <Title>建方希望日程変更</Title>

      <FormProvider {...form}>
        <form onSubmit={onSubmit} className='mt-6 ml-4 space-y-6'>
          <div className='flex flex-col gap-2'>
            <DateRangePicker label='建方希望日' nameFrom='dateFrom' nameTo='dateTo' isButtonClear />
          </div>

          <Textarea label='備考' name='notext' rows={4} />
          <ModalFooterButtons onClose={onClose} />
        </form>
      </FormProvider>
    </ModalContainer>
  )
}
